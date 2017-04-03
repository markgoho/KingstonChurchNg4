import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import * as firebase from 'firebase';

@Injectable()
export class SermonService {

  constructor() { }

  upload(fileForUpload) {
    let newAudioKey = firebase.database().ref().child('/sermons').push().key;
    let audioPath = `/sermons/${newAudioKey}/${fileForUpload.name}`;

    let storage = firebase.storage();
    let storageRef = storage.ref();
    let newAudioRef = storageRef.child(audioPath);
    const metadata = {
      contentType: fileForUpload.type
    }

    let audioUploadTask = newAudioRef.put(fileForUpload, metadata)
      .then(snapshot => {
        console.log('New audio uploaded. Size:', snapshot.totalBytes, 'bytes.');
        let url = snapshot.metadata.downloadURLs[0];
        console.log('File available at', url);
        return url;
      }).catch(error => {
        console.error('Error while uploading audio', error);
      });

    return Promise.all([audioUploadTask]).then(url => console.log('Returned promise', url));

    
  }

}

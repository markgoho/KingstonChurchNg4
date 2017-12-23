import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SermonService } from '../../sermons/sermon.service';

import { AngularFire } from 'angularfire2';

import * as firebase from 'firebase';

@Component({
  selector: 'app-create-sermon',
  templateUrl: './create-sermon.component.html',
  styleUrls: ['./create-sermon.component.scss']
})
export class CreateSermonComponent implements OnInit {
  form = this.fb.group({
    title: ['', Validators.required],
    scripture: this.fb.group({
      book: ['', Validators.required],
      chapter: ['', Validators.required],
      verse: ['', Validators.required]
    }),
    category: ['', Validators.required],
    audioLink: ['', Validators.required]
  });

  books = {
    old: [
      'Genesis',
      'Exodus',
      'Leviticus',
      'Numbers',
      'Deuteronomy',
      'Joshua',
      'Judges',
      'Ruth',
      '1 Samuel',
      '2 Samuel',
      '1 Kings',
      '2 Kings',
      '1 Chronicles',
      '2 Chronicles',
      'Ezra',
      'Nehemiah',
      'Esther',
      'Job',
      'Psalms',
      'Proverbs',
      'Ecclesiastes',
      'Song of Solomon',
      'Isaiah',
      'Jeremiah',
      'Lamentations',
      'Ezekiel',
      'Daniel',
      'Hosea',
      'Joel',
      'Amos',
      'Obadiah',
      'Jonah',
      'Micah',
      'Nahum',
      'Habakkuk',
      'Zephaniah',
      'Haggai',
      'Zechariah',
      'Malachi'
    ],
    new: [
      'Matthew',
      'Mark',
      'Luke',
      'John',
      'Acts',
      'Romans',
      '1 Corinthians',
      '2 Corinthians',
      'Galatians',
      'Ephesians',
      'Philippians',
      'Colossians',
      '1 Thessalonians',
      '2 Thessalonians',
      '1 Timothy',
      '2 Timothy',
      'Titus',
      'Philemon',
      'Hebrews',
      'James',
      '1 Peter',
      '2 Peter',
      '1 John',
      '2 John',
      '3 John',
      'Jude',
      'Revelation'
    ]
  };

  progressValue: number = 0;

  constructor(
    private fb: FormBuilder,
    private af: AngularFire,
    private sermonService: SermonService
  ) {}

  ngOnInit() {}

  onInputFileChange(evt: Event) {
    let target: HTMLInputElement = <HTMLInputElement>event.target;
    let files: FileList = target.files;

    if (files && files[0]) {
      this.upload(files[0]);
    }
  }

  upload(file) {
    // Construct the path
    let storageRef = firebase.storage().ref();
    let path = `/sermons/${file.name}`;
    let audioPath = storageRef.child(path);

    const scripture = `${this.form.get('scripture.book').value} ${
      this.form.get('scripture.chapter').value
    }:${this.form.get('scripture.verse').value}`;

    const metadata = {
      contentType: file.type,
      customMetadata: {
        name: this.form.get('title').value,
        scripture
      }
    };

    // https://firebase.google.com/docs/storage/web/upload-files
    let audioTask = audioPath.put(file, metadata);

    audioTask.on(
      'state_changed',
      // Called any time the state changes
      snapshot => {
        let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        this.progressValue = percentage;
      },
      // Called on errors
      error => {
        console.error('There was an error uploading', error);
      },
      // Called on complete
      () => {
        let url = audioTask.snapshot.downloadURL;
        console.log('Uploaded audio file to', url);
        this.form.patchValue({ audioLink: url });
      }
    );
  }

  onSubmit() {
    this.sermonService.createSermon(this.form.value);
    this.form.reset();
  }
}

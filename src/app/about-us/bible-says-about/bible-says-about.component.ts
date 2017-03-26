import { Component } from '@angular/core';

@Component({
  selector: 'app-bible-says-about',
  templateUrl: './bible-says-about.component.html',
  styleUrls: ['./bible-says-about.component.scss']
})
export class BibleSaysAboutComponent {

  bibleSays = [
    {
      subject: 'God',
      concept: 'He is the Creator of all things (Genesis 1; Hebrews 3:4) and exists as the Father, Son (Jesus Christ) and Holy Spirit (Matthew 3:16-17; 28:19; 2 Corinthians 13:14).'
    },
    {
      subject: 'The Bible',
      concept: 'The Scriptures are inspired by God and complete.  The Bible is the only reliable guide for our lives and is sufficient for all teaching, preaching, and living (2 Timothy 3:16-17).  The Scriptures are not open to multiple interpretations, and must be approached as the final word on all matters of faith.  We approach them by asking what the author’s intent was for the original readers.'
    },
    {
      subject: 'Jesus Christ',
      concept: 'Jesus is the Son of God, who came to earth both fully human and fully God (John 1:1, 14; Hebrews 1:3; Philippians 2:6-8). He lived a sinless life despite being tempted in all things, and offered Himself as a perfect sacrifice on the cross (Hebrews 4:15); he took our place and felt separation from God (Matthew 27:46), so we never have to.  He defeated death when he rose from the grave and now sits at the right hand of the Father (Hebrews 2.14-15; Matthew 28; Colossians 3:1).'
    },
    {
      subject: 'Salvation',
      concept: 'If one wishes to receive the salvation of God, they must respond appropriately to the Gospel.  This includes believing that Jesus Christ is the Son of God (Matthew 16:15-18; John 5:18; Mark 3:11; 2 Corinthians 1:19) and that he came to earth to die on the cross and shed his blood in order to cleanse us from our sins (John 1:29; 2 Corinthians 5:15). Once this knowledge is established within the believer, they must then submit to God and accept His grace, which is freely given, through baptism (Ephesians 2:8; Titus 3:5).  This is a full body immersion, as in the New Testament.  Once one is baptized, they have experienced the new birth (John 3) and have come in contact with the blood of Christ, and are therefore forgiven, sanctified, and redeemed (Romans 6; Acts 2:38).'
    },
    {
      subject: 'The Church',
      concept: 'Jesus established the Church as an earthly kingdom of believers, of which he is the head (Colossians 1:18).  All who are baptized into Christ have been added to the his body, or the Church, or the Kingdom of God (1 Corinthians 12:12-14; Romans 12:5). The terms are interchangeable.  To be united with Christ is to be united with other members of his body, other Christians.'
    },
  ];

} 

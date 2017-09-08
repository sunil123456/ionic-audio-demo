import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AudioTrackComponent } from 'ionic-audio';

import { AudioProvider, IAudioTrack, ITrackConstraint } from 'ionic-audio';

@Component({
  selector: 'lists',
  templateUrl: 'lists.html'
})
export class ListsPage {
  // @ViewChild(AudioTrackComponent) audioTrack: AudioTrackComponent;
  // myTracks: ITrackConstraint[];
  playlist: ITrackConstraint[] = [];
  // allTracks: any;
  currentIndex: number = -1;
  currentTrack: ITrackConstraint;
  myTracks: any[];
  allTracks: any[];
  selectedTrack: any;
  constructor(private _audioProvider: AudioProvider, public navCtrl: NavController, private _cdRef: ChangeDetectorRef) {
  


 this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },
    
    {
      src: 'https://archive.org/download/swrembel2010-03-07.tlm170.flac16/swrembel2010-03-07s1t05.mp3',
      artist: 'Stephane Wrembel',
      title: 'Stephane Wrembel Live',
      art: 'assets/img/Stephane.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];


  }
  
ngOnInit() {

} 

  ionViewDidLoad() {
    this.playlist = this._audioProvider.tracks;
  //    console.log("this.audioTrack ===============", this._audioProvider.tracks[0]);
  //    this.playlist = this._audioProvider.tracks;
  //   // if (this._audioProvider.tracks.length !== 0) {
  //   //     this._audioProvider.tracks[0].destroy();
  //   //     this._audioProvider.tracks.splice(0);
  //   // }

  //     // for(var i = 0; i < this._audioProvider.tracks.length; i++)
  //     //   {
  //     //       this._audioProvider.tracks[i].stop();            
  //     //   }

  }
  
    
  // add(track: ITrackConstraint) {
  //   this.playlist.push(track);
  // }

  play(track: ITrackConstraint, index: number) {
          this.currentTrack = track;
          this.currentIndex = index; 
  }

  next() {
    // if there is a next track on the list play it
    if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
      let i = this.currentIndex + 1;
      let track = this.playlist[i];
      this.play(track, i);
      this._cdRef.detectChanges();  // needed to ensure UI update
    } else{
      // if no track is playing then start with the first track on the list
      this.play(this.playlist[0], 0);
    }
  }

 prev(){ 
      if( this.currentIndex == 0 || this.currentIndex == null || this.currentIndex == undefined)
      {
        this.currentIndex = this.playlist.length - 1;
        let track = this.playlist[this.currentIndex];
        this.play(track, this.currentIndex);
      }else
      {
        this.currentIndex = this.currentIndex - 1;
        let track = this.playlist[this.currentIndex];
        this.play(track, this.currentIndex);
      }
 
    // console.log("current index ==", this.currentIndex);
    // if(this.currentIndex == null || this.currentIndex == undefined)
    // this.currentIndex = this.playlist.length - 1;
    // console.log("this.playlist.length ==", this.playlist.length > 0);
    // console.log("this.playlist.length 1==", this.currentIndex > 0);
    //  console.log("this.playlist.length 2==", this.currentIndex < this.playlist.length - 1);
    // if (this.playlist.length > 0 && this.currentIndex > 0 && this.currentIndex < this.playlist.length - 1) {
    //   console.log("inside true");
    //   let i = this.currentIndex--;
    //   let track = this.playlist[i];
    //   this.play(track, i);
    //   this._cdRef.detectChanges();  // needed to ensure UI update
    // } else{
    //   console.log("inside false");
    //   // if no track is playing then start with the first track on the list
    //   this.play(this.playlist[0], 0);
    // }
  }


  // onTrackFinished(track: any) {
  //   this.next();
  // }

  clear() {
    this.playlist = [];
  } 

  // playSelectedTrack() {
  //   // use AudioProvider to control selected track 
  //   this._audioProvider.play(this.selectedTrack);
  // }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this._audioProvider.pause(this.selectedTrack);
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  } 

}

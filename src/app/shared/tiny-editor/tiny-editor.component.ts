import { Component, AfterViewInit, EventEmitter, OnDestroy, Input, Output, OnChanges, forwardRef } from '@angular/core';
//import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { isNullOrUndefined } from "util";

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';

declare var tinymce: any;

// const contentAccessor = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => TinyEditorComponent),
//   multi: true
// };

@Component({
  selector: 'app-tiny-editor',
  styleUrls: ['./tiny-editor.component.scss'],
  //providers: [contentAccessor],
  template: `
      <textarea id="{{elementId}}"></textarea>
  `
})
export class TinyEditorComponent implements AfterViewInit, OnChanges {
  // private onTouch: Function;
  // private onModelChange: Function;
  
  // registerOnTouched(fn) {
  //   this.onTouch = fn;
  // }
  // registerOnChange(fn) {
  //   this.onModelChange = fn;
  // }
  
  // writeValue(value) {
  //   this.editorContent = value;
  // }

  @Input() elementId: string;
  @Input() initialContent: string;
  @Output() onEditorContentChange = new EventEmitter();

  editor;
  editorContent: string = null;
  didSetValue: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      selector: `#${this.elementId}`,
      plugins: ['link', 'table'],
      skin_url: '../assets/skins/lightgray',
      schema: 'html5',
      setup: editor => {
        this.editor = editor;
        editor.on('change keyup', () => {
          const tinyContent = editor.getContent();
          this.editorContent = tinyContent;
          this.onEditorContentChange.emit(tinyContent);
          //this.onModelChange(tinyContent);
          //this.onTouch();
        });
      },
      // https://www.tinymce.com/docs/configure/integration-and-setup/#init_instance_callback
      // init_instance_callback: inst => inst.setContent(this.initialContent),
      init_instance_callback: inst => inst.setContent(this.initialContent.toString())
    });
  }

  ngOnChanges(){

    console.log(this.initialContent);
    // https://www.youtube.com/watch?v=0IXelrVEoWI
    // setting initial content via @Input initialContent
    if(!isNullOrUndefined(this.editor) && this.initialContent !== "" && !this.didSetValue){
      console.log(this.initialContent);
      this.didSetValue = true;
      this.editor.setContent(this.initialContent);
    }
  }

  ngOnDestroy() {
		tinymce.remove(this.editor);
	}

}

import { Component, AfterViewInit, EventEmitter, OnDestroy, Input, Output, OnChanges, forwardRef } from '@angular/core';
import { isNullOrUndefined } from "util";

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';

declare var tinymce: any;

@Component({
  selector: 'app-tiny-editor',
  styleUrls: ['./tiny-editor.component.scss'],
  template: `
      <textarea id="{{elementId}}"></textarea>
  `
})
export class TinyEditorComponent implements AfterViewInit, OnChanges {

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
        });
      },
      // https://www.tinymce.com/docs/configure/integration-and-setup/#init_instance_callback
      init_instance_callback: inst => inst.setContent(this.initialContent.toString())
    });
  }

  ngOnChanges(){
    // https://www.youtube.com/watch?v=0IXelrVEoWI
    // setting initial content via @Input initialContent
    if(!isNullOrUndefined(this.editor) && this.initialContent !== "" && !this.didSetValue){
      console.log('initial set', this.initialContent);
      this.didSetValue = true;
      this.editor.setContent(this.initialContent);
    }
  }

  ngOnDestroy() {
		tinymce.remove(this.editor);
	}

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Note } from '../model/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  /** The list of notes. */
  public notes: Array<Note> = [];

  /** The selected note. */
  public selectedNote: Note;

  /** Items for the menu bar. */
  public menuItems: MenuItem[];

  constructor() {
  }

  /**
   * Fired to initialize this component.
   * 
   */
  ngOnInit() {
    // TODO: tmp code
    this.notes.push(new Note('One', 'One Details'));
    this.notes.push(new Note('Two', 'Two Details'));
    this.notes.push(new Note('Three', 'Three Details'));

    this.menuItems = [
      { label: 'New', icon: 'pi pi-fw pi-plus', command: () => {
        const note = new Note();
        this.notes.push(note);
        this.selectedNote = note;
      }},
      { label: 'Delete', icon: 'pi pi-fw pi-trash', command: () => {
        if (this.selectedNote) {
          const i = this.notes.indexOf(this.selectedNote);
          if (i > -1) {
            this.notes.splice(i, 1);
            this.selectedNote = null;
          }
        }
      }}
    ];
  }

  /**
   * Fired when a tab is opened.
   * 
   * @param evt The event associated with the tab opening.
   */
  onTabOpen(evt: any) {
    this.selectedNote = this.notes[evt.index];
  }

  /**
   * Fired when a tab is closed.
   * 
   */
  onTabClosed() {
    this.selectedNote = null;
  }

  addNote() {

  }

  removeNote() {

  }

  onNoteClicked(note: Note) {

  }

}

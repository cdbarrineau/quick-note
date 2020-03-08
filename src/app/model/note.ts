/**
 * Model for a note.
 * 
 */
export class Note {
  /**
   * Constructor.
   * 
   * @param title The title for the note. 
   * @param note The not's text.
   */
  constructor(public title?: string, public note?: string, public timestamp?: Date, public modified?: Date) {
    if (!this.timestamp) {
      this.timestamp = new Date();
    }
  }
}
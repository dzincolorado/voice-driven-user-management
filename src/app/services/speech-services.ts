/**
 * Created by denisziegler on 5/25/17.
 */

import annyang from 'annyang';

export class SpeechService {

  private _commands: any;

  constructor(){
    this._commands = {};
  }

  start(){
    annyang.addCommands(this._commands);
    annyang.debug(true);
    annyang.start();
  }
}

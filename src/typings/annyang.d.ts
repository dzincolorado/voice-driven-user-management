/**
 * Created by denisziegler on 5/25/17.
 */

export default annyang;

declare const annyang: {
  addCommands: <T extends {}>(commands: T) => null,
  debug: (yn?: boolean) => null,
  start: (options: any) => null,
  isListening: () => null,
  addCallback: (type: string, callback: Function, context: any) => null
};

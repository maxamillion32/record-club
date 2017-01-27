export class User {
  liveProfile: boolean = false;
  constructor(
    public displayName: string,
    public uid: string,
    public photoURL: string,
    public description: string,
  ) {

  }
}

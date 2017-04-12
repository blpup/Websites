export class User {
    constructor(
      public name: string,
      public email: string,
      public appDesign: boolean,
      public graphicDesign: boolean,
      public motionDesign: boolean,
      public uxDesign: boolean,
      public webDesign: boolean,
      public marketing: boolean
    ) { }
}

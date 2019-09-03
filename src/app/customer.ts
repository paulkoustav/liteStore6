export class Customer {
    constructor(
        public id: number,
        public name: string,
        public mobile:number,
        public country: string,
        public email?: string,
        public uploadedfiles?: string[]
        
      ) {  }
}

export class Project{
    constructor(
        public _id: string,
        public name: string,
        public descripcion: string,
        public categoria: string,
        public langs: string,
        public year: number,
        public image: string,
    ){

    }
}
export class Project_id{
    constructor(
        public name: string,
        public descripcion: string,
        public categoria: string,
        public langs: string,
        public year: number,
        public image: string,
    ){

    }

}
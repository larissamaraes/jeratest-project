export class StudyLink
{   
    constructor(
        public id: number,
        public title: string,
        public url: string,
        public date: string,
        public categories: string[]
    ){}
}

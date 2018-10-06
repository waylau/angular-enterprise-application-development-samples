export class User {
    constructor(
        public id: number,
        public name: string, // 姓名
        public job: string,  // 职业
        public age?: number  // 年龄
    ) { }
}


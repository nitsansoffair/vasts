const db = require('../db/mysql');

class Vast {
    constructor(url, position, width, height) {
        this.url = url;
        this.position = position;
        this.width = width;
        this.height = height;
    }

    static fetchAll(){
        return db.execute(`SELECT * FROM vasts`);
    }

    static findById(id){
        const query = `
            SELECT * FROM vasts
            WHERE id = ${id}
        `;

        return db.execute(query);
    }

    save(){
        const query = `
            INSERT INTO vasts (vast_url, position, width, height)
            VALUES (?, ?, ?, ?)
        `;

        const values = [this.url, this.position, this.width, this.height];

        return db.execute(query, values);
    }
}

module.exports = Vast;

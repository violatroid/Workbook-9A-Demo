// The tables will have fields - model is the structure and relationshop between entities (table)

// js property conflicts with data base field -> use a more abractact (Attribute)
// js prop / db field -> Attribute 
// js obj / db tables -> Entity (object)

class Attr{
    constructor(name, value="", display=""){
        this.name = name;
        this.value = value;
        this.displayName = displayName ? displayName : name;
    }
}

class Entity{
    constructor(name, attrList=[]){
        this.name = name;
        this.attrList = attrList;
    }
    create(){
        let sql = name;
        this.attribute 
    }
}
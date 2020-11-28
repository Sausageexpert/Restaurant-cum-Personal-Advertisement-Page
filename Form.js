class Form{
    constructor(x, y){
        this.button = createButton("Enter");
        this.input = createInput("Password");
        this.x = x;
        thiss.y = y;
    }

    display(){
        this.title.html("Important Form");
        this.input.position(200, 200);
        this.button.position(200, 200);
        var value = this.input.value();
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            text("We have taken your password. Don't worry, it will only be used for very.... Safe purposes (Mwa ha ha)", 200, 1000);
        }
        )
    }
}
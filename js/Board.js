function Board() {
    this.createArray();
}
Board.prototype.array=[];
Board.prototype.div=null;
Board.getLetter = function (i) {
    
};
Board.prototype.draw=function (){
    if(this.div===null||this.div===undefined){
        var black=false;
        this.div=$(document)
            .add($("<div class='"+BOARD_CLASS+" id='"+BOARD_ID+"'></div>"));
        for(var i=0;i<BOARD_LENGTH;i++){
            $('#'+Board.ID)
                .add("<div class='"+BOARD_ROW_CLASS+" id='"+Board.getLetter(i)+"'></div>");
            for(var j=0;j<BOARD_LENGTH;j++){
                $('#'+Board.LETTER[i])
                    .add("<div class='"+Board.ROW_CLASS+" id='"+Board.LETTER[i]+"'></div>");
            }
        }
    }
};
Board.prototype.createArray=function () {
    for(var i=0;i<Board.length;i++)
        this.array=new Array(Board.length);

};
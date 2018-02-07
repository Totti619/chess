function Board() {
    this.createArray();
}
Board.prototype.array=[];
Board.prototype.div=null;
Board.getLetter = function (i) {
    return String.fromCharCode(i+97);
};
Board.prototype.draw=function (){
    // if(this.div===null||this.div===undefined){
        var black=false;
        this.div=$("<div class='"+BOARD_CLASS+"' id='"+BOARD_ID+"'></div>");
        for(var i=BOARD_LENGTH;i>0;i--){
            $(this.div)
                .append("<div class='"+BOARD_ROW_CLASS+"' id='"+i+"'></div>");
        }
        $("body").append(this.div);
        for(var j=BOARD_LENGTH;j>0;j--){
            var id="#"+j,pos=0;
            black=j%2===1;
            for(var k=BOARD_LENGTH;k>0;k--) {
                $(id)
                    .append("<div class='" + BOARD_ROW_CELL_CLASS + " " +(black?BLACK:WHITE)+ "' id='" + Board.getLetter(pos++) + j + "'></div>");
                black=!black;
            }
        }
    // }
};
Board.prototype.createArray=function () {
    for(var i=0;i<Board.length;i++)
        this.array=new Array(Board.length);

};
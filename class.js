class Word{
    wordobject=new Array(3);
    langword;  //слово на русском или осетинском языке
    pictureshow=new Image(); //языковая картинка
    namepictureshow;
    numberword; //номер строки со словом
    constructor(ss){
        this.wordobject=ss.split(' ');
        this.numberword=this.wordobject[0];
    }
    GetEmptyPicture(){
        this.namepictureshow="p"+this.numberword+".png";
        this.pictureshow.src=this.namepictureshow;
        return this.pictureshow;
    }
    GetRusPicture(){
        this.namepictureshow="p"+this.numberword+"ru.png";
        this.pictureshow.src=this.namepictureshow;
        return this.pictureshow;
    }
    GetIronPicture(){
        this.namepictureshow="p"+this.numberword+"ir.png";
        this.pictureshow.src=this.namepictureshow;
        return this.pictureshow;
    }
    GetIronWordPicture(){
        this.namepictureshow="p"+this.numberword+"irword.png";
        this.pictureshow.src=this.namepictureshow;
        return this.pictureshow;
    }
}
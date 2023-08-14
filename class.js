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
class WordArray{
    wordmas=[];
    Length=0;
    count=0;
    constructor(massiv,number){
        count=number+1;
        wordmas=this.ToWord(massiv);
    }
    ToWord(massiv){  //конвертация строкового массива в массив типа Word
        var temp=new Array(massiv.Length);
        for(var i=0;i<massiv.Length;i++){
            temp[i]=new Word(massiv[i])
        }
        return temp;
    }
    GetExtract(wordmassiv){
        result=new Array(count);
        for(var i=0;i<this.count;i++){
            result[i]=wordmassiv[i];
            return result;
        }
    }
    Antirepeat(wordmassiv,stringmassiv){
        var min=0;
        for(var i=stringmassiv.Length-1;i>=1;i--){
            var max=i+1;
            var j=Math.floor(Math.random() * (max - min)) + min;
            var temp=wordmassiv[j];
            wordmassiv[j]=wordmassiv[i];
            wordmassiv[i]=temp;
        }
    }
    Shuffling(){
        var min=0;
        for(var i=this.count-2;i>=1;i--){
            var max=i+1;
            var j=Math.floor(Math.random() * (max - min)) + min;
            var temp=this.wordmas[j];
            this.wordmas[j]=this.wordmas[i];
            this.wordmas[i]=temp;
        }
    }
}
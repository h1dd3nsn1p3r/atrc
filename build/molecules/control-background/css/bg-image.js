/*Inbuilt*/
import BgPos from './image/position';
import BgRpt from './image/repeat';
import BgSz from './image/size';
import BgAtch from './image/attachment';
import BgBlendMode from './image/blend-mode';

/*Local*/
var BgImage = function BgImage(value, innerOutput, properties) {
  if (value.bgImgUrl) {
    innerOutput.xs += "".concat(properties.bgImg, "      : url(\"").concat(value.bgImgUrl, "\");");

    /*Background position*/
    innerOutput = BgPos(value, innerOutput, properties.bgPos);

    /*Background repeat*/
    innerOutput = BgRpt(value, innerOutput, properties.bgRpt);

    /*Background size*/
    innerOutput = BgSz(value, innerOutput, properties.bgSz);

    /*Background attachment*/
    innerOutput = BgAtch(value, innerOutput, properties.bgAtch);

    /*Blend mod*/
    innerOutput = BgBlendMode(value, innerOutput, properties.bgBlendMode);
  }
  return innerOutput;
};
export default BgImage;
//# sourceMappingURL=bg-image.js.map
export interface ISrtItem {
  index?: string;
  time?: string;
  text?: string;
}

export function parseSrt(srtText: string): ISrtItem[] {
  const srtTextArr = srtText.split('\n');
  const srtObjArr: ISrtItem[] = [];
  let srtObjIndex = 1;
  let currentSrtObj: ISrtItem = {index: ''};

  for (let i = 0; i < srtTextArr.length; i++) {
    const srtTextArrItem = srtTextArr[i];

    if (!srtTextArrItem) {
      srtObjIndex = 0;

      if (currentSrtObj.index) {
        srtObjArr.push(currentSrtObj);

        currentSrtObj = {};
      }

      srtObjIndex++;
      continue;
    }

    if (srtObjIndex === 1) {
      currentSrtObj.index = srtTextArrItem;
      srtObjIndex++;
      continue;
    }

    if (srtObjIndex === 2) {
      currentSrtObj.time = srtTextArrItem;
      srtObjIndex++;
      continue;
    }

    currentSrtObj.text = currentSrtObj.text ? currentSrtObj.text + srtTextArrItem : srtTextArrItem;
  }

  return srtObjArr;
}


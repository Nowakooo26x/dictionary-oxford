function getArrayWithChakedLevel( array, stateLevel ) {

    const boolState = ( item, level ) => {
        if((item.level === level) && stateLevel[level]){
          return true;
        }else{
          return false;
        }
    }

    const newArray = array.filter(item => ( 
        boolState(item, "a1") ||
        boolState(item, "a2") ||
        boolState(item, "b1") ||
        boolState(item, "b2") ||
        boolState(item, "c1")
      ));

    return newArray;
}

export default getArrayWithChakedLevel;
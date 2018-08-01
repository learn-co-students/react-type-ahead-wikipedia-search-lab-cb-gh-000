'use strict';

import Store from './Store';

class ResultStore extends Store {

  isOutdated(date){
    if (date < this.getState().updated){
      return true;
    }else {
    return false;
    }

  }
}

const resultStore = new ResultStore({
  results: [],
  updated: new Date(),
});

export default resultStore;

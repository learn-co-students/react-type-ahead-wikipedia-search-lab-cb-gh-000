'use strict';

import Store from './Store';

class ResultStore extends Store {
  isOutdated(updated){
    return updated < this.getState().updated;
  }
}

const resultStore = new ResultStore({
  results: ['']
});

export default resultStore;

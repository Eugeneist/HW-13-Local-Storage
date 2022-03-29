const storage = {
  get: (key) => {
    try {
      const json = localStorage.getItem(key);
  
      if (json === null) {
        return null;
      }
  
      return JSON.parse(json);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  set: (key, value) => {
    try {
      const json = JSON.stringify(value);
      localStorage.setItem(key, json);
    } catch (error) {
      console.error(error);
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }
};
  
export default storage;
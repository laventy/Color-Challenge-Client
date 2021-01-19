import { makeAutoObservable } from "mobx";
import { fetchColors } from "services/colors";

class ColorsStore {
  colors: Array<any> = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchColors = () => {
    this.colors = [];

    fetchColors()
      .then((res) => {
        this.colors = res.data;
      })
      .catch(() => {
        console.log("fetchFilmList failed");
      });
  };
}

export default ColorsStore;

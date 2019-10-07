import { createSlice, PayloadAction } from "redux-starter-kit";

// 型定義
interface Menu {
  id: number;
  title: string;
  text: string;
}
// MainMenu1
export interface MainMenu1 extends Menu {
  list: MainMenu2[];
}
// MainMenu2
interface MainMenu2 extends Menu {
  list: Menu[];
}

// state
export interface MenusState {
  nextMenuId: number;
  menuList: MainMenu1[];
}

// state の初期値
const menuInitialState: MenusState = {
  nextMenuId: 1,
  menuList: [
    {
      id: 0,
      title: "MainMenu",
      text: "",
      list: []
    }
  ]
};

// actions と reducers の定義
const menusModules = createSlice({
  slice: "menus",
  initialState: menuInitialState,
  reducers: {
    // todo を追加
    addMainMenu1: (state, action: PayloadAction<string>) => {
      const menu = {
        id: state.nextMenuId++,
        title: "",
        text: "",
        list: []
      };
      // Pushしてしまっている
      state.menuList.push(menu);
    }
  }
});

export default menusModules;

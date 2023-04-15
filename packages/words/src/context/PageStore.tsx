import { createContext, useCallback, useContext, useState } from "react";
import { Callbacks } from "words-ui";

export enum Page {
  AddTodo = "addTodo",
  EditTodo = "editTodo",
  List = "list",
}

const defaultPage = Page.List;

const usePageStoreState = () => {
  const [activePage, setActivePage] = useState(defaultPage);
  const goToPage = useCallback((page: Page) => setActivePage(page), []);

  return {
    activePage,
    goToPage,
  };
};

type PageStoreState = ReturnType<typeof usePageStoreState>;

const PageStoreContext = createContext<PageStoreState>({
  activePage: defaultPage,
  goToPage: Callbacks.empty,
});

type PageStoreProviderProps = {
  children: React.ReactNode;
};

export const PageStoreProvider = ({ children }: PageStoreProviderProps) => {
  const store = usePageStoreState();

  return <PageStoreContext.Provider value={store}>{children}</PageStoreContext.Provider>;
};

export const usePageStore = () => useContext(PageStoreContext);

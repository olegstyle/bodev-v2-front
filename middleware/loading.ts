import {ApiEnums} from "~/store/enums/ApiEnums";

export default function (context) {
  if (!context.store.getters['api/' + ApiEnums.GetterEnum.PORTFOLIO_DATA]) {
    context.redirect('/');
  }
}

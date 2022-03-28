import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class UsernameFilled {
  static readonly type = '[Username Field] Filled Username';

  constructor(public payload: { username: string }) {
  }
}

export class PasswordFilled {
  static readonly type = '[Password Field] Filled Password';

  constructor(public payload: { password: string }) {
  }
}

export class ToggleShowPassword {
  static readonly type = '[Password Field] Toggle show password';
}

export class SetShowPassword {
  static readonly type = '[Password Field] Set show password';

  constructor(public payload: { showPassword: boolean }) {
  }
}

export class SubmitCredentials {
  static readonly type = '[Login button] Submit credentials';
}

export class RedirectUserAfterLogin {
  static readonly type = '[LoginState] Redirect user after successfull login';
}

export interface LoginStateModel {
  data: {
    username: string;
    password: string;
    loggedIn: boolean;
  },
  ui: {
    valid_username: boolean;
    valid_password: boolean;
    show_password: boolean;
  }
}

const initialLoginStateModel: LoginStateModel = {
  data: {
    username: '',
    password: '',
    loggedIn: false
  },
  ui: {
    valid_username: false,
    valid_password: false,
    show_password: false
  }
};

@State<LoginStateModel>({
  name: 'login',
  defaults: initialLoginStateModel
})
@Injectable()
export class LoginState {

  constructor(private router: Router) {
  }

  @Action(UsernameFilled)
  setUsername(ctx: StateContext<LoginStateModel>, { payload }: UsernameFilled) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      data: {
        ...state.data,
        username: payload.username
      }
    });
  }

  @Action(UsernameFilled)
  setUsernameValid(ctx: StateContext<LoginStateModel>, { payload }: UsernameFilled) {
    const isUsernameValid: boolean = payload.username.trim().length != 0;

    const state = ctx.getState();
    ctx.patchState({
      ui: {
        ...state.ui,
        valid_username: isUsernameValid
      }
    });
  }

  @Action(PasswordFilled)
  setPassword(ctx: StateContext<LoginStateModel>, { payload }: PasswordFilled) {
    const state = ctx.getState();
    ctx.patchState({
      data: {
        ...state.data,
        password: payload.password
      }
    });
  }

  // the username validation logic can be moved to component level or moved to a common module
  @Action(PasswordFilled)
  setPasswordValid(ctx: StateContext<LoginStateModel>, { payload }: PasswordFilled) {
    const isPasswordValid: boolean = payload.password.trim().length != 0;

    const state = ctx.getState();
    ctx.patchState({
      ui: {
        ...state.ui,
        valid_password: isPasswordValid
      }
    });
  }

  @Action(ToggleShowPassword)
  toggleShowPassword(ctx: StateContext<LoginStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      ui: {
        ...state.ui,
        // this is NOT state.ui.show_password = !state.ui.show_password because state is immutable
        // we create an entirely new object and use values of a previous one to fill up values
        // then we make changes to show_password value
        // at the end we initialize a new object with the values
        show_password: !state.ui.show_password
      }
    });
  }

  @Action(SetShowPassword)
  setShowPassword(ctx: StateContext<LoginStateModel>, { payload }: SetShowPassword) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      ui: {
        ...state.ui,
        show_password: payload.showPassword
      }
    });
  }

  @Action(SubmitCredentials)
  login(ctx: StateContext<LoginStateModel>) {
    const state = ctx.getState();
    if (state.ui.valid_username && state.ui.valid_password) {
      ctx.patchState({
        data: {
          ...state.data,
          loggedIn: true
        }
      });
    }
    ctx.dispatch(new RedirectUserAfterLogin());
  }

  @Action(RedirectUserAfterLogin)
  redirectToMainPage() {
    this.router.navigateByUrl('');
  }
}

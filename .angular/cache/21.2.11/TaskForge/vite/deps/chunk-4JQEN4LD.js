import {
  PolymorpheusOutlet,
  TUI_ICON_END,
  TUI_ICON_START,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_VERSION,
  TuiDropdownDirective,
  WA_IS_MOBILE,
  tuiAsAuxiliary,
  tuiCreateOptions,
  tuiDirectiveBinding,
  tuiGetIconMode,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsFocused,
  tuiIsFocusedIn,
  tuiIsPresent,
  tuiIsString,
  tuiMoveFocus,
  tuiProvide,
  tuiTakeUntilDestroyed,
  tuiWithStyles,
  tuiZonefree
} from "./chunk-557WZTX7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  EnvironmentInjector,
  INJECTOR$1,
  InjectionToken,
  NgZone,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  contentChild,
  contentChildren,
  createComponent,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-OKKZ2MNK.js";
import {
  timer
} from "./chunk-PJVWDKLX.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-transitioned.mjs
var TuiTransitioned = class _TuiTransitioned {
  constructor() {
    const el = tuiInjectElement();
    afterNextRender(() => requestAnimationFrame(() => el.style.setProperty("transition", "")));
  }
  static {
    this.ɵfac = function TuiTransitioned_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTransitioned)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTransitioned,
      selectors: [["", "tuiTransitioned", ""]],
      hostAttrs: [2, "transition", "none"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTransitioned, [{
    type: Directive,
    args: [{
      selector: "[tuiTransitioned]",
      host: {
        style: "transition: none"
      }
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = {
  appearance: ""
};
var TUI_APPEARANCE_OPTIONS = new InjectionToken(ngDevMode ? "TUI_APPEARANCE_OPTIONS" : "", {
  factory: () => TUI_APPEARANCE_DEFAULT_OPTIONS
});
function tuiAppearanceOptionsProvider(token) {
  return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var Styles = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-appearance-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiAppearance]:where(*[data-tui-version="5.6.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.6.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.6.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-state=disabled]:after{cursor:initial}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-appearance-${TUI_VERSION}`,
      styles: ['[tuiAppearance]:where(*[data-tui-version="5.6.0"]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem;transition-property:color,background-color,opacity,box-shadow,border-color,border-radius,filter}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):before,[tuiAppearance]:where(*[data-tui-version="5.6.0"]):after{transition-property:none;transition-duration:inherit;transition-timing-function:ease-in-out}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):disabled:not([data-state]),[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-state=disabled]{cursor:initial;opacity:var(--tui-disabled-opacity)}[tuiAppearance]:where(*[data-tui-version="5.6.0"]):disabled:not([data-state]):before,[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-state=disabled]:before,[tuiAppearance]:where(*[data-tui-version="5.6.0"]):disabled:not([data-state]):after,[tuiAppearance]:where(*[data-tui-version="5.6.0"])[data-state=disabled]:after{cursor:initial}\n']
    }]
  }], null, null);
})();
var TuiAppearance = class _TuiAppearance {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
    this.modes = computed((mode = this.tuiAppearanceMode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.tuiAppearance = input(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.tuiAppearanceState = input(null);
    this.tuiAppearanceFocus = input(null);
    this.tuiAppearanceMode = input(null);
  }
  static {
    this.ɵfac = function TuiAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppearance,
      selectors: [["", "tuiAppearance", ""]],
      hostAttrs: ["data-tui-version", "5.6.0", "tuiAppearance", ""],
      hostVars: 4,
      hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.tuiAppearance())("data-focus", ctx.tuiAppearanceFocus())("data-mode", ctx.modes())("data-state", ctx.tuiAppearanceState());
        }
      },
      inputs: {
        tuiAppearance: [1, "tuiAppearance"],
        tuiAppearanceState: [1, "tuiAppearanceState"],
        tuiAppearanceFocus: [1, "tuiAppearanceFocus"],
        tuiAppearanceMode: [1, "tuiAppearanceMode"]
      },
      features: [ɵɵHostDirectivesFeature([TuiTransitioned])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      selector: "[tuiAppearance]",
      hostDirectives: [TuiTransitioned],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiAppearance: "",
        "[attr.data-appearance]": "tuiAppearance()",
        "[attr.data-focus]": "tuiAppearanceFocus()",
        "[attr.data-mode]": "modes()",
        "[attr.data-state]": "tuiAppearanceState()"
      }
    }]
  }], null, null);
})();
function tuiAppearance(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearance", value, options);
}
function tuiAppearanceState(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceState", value, options);
}
function tuiAppearanceFocus(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceFocus", value, options);
}
function tuiAppearanceMode(value, options = {}) {
  return tuiDirectiveBinding(TuiAppearance, "tuiAppearanceMode", value, options);
}
var TuiWithAppearance = class _TuiWithAppearance {
  static {
    this.ɵfac = function TuiWithAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithAppearance,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var OPT = {
  self: true,
  optional: true
};
var Styles2 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-icons-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: [':where([tuiIcons][data-tui-version="5.6.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: calc(clamp(0px, var(--tui-font-offset) - 10px, 1px)/1px) }:where([tuiIcons][data-tui-version="5.6.0"]):before,:where([tuiIcons][data-tui-version="5.6.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.6.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles2, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-icons-${TUI_VERSION}`,
      styles: [':where([tuiIcons][data-tui-version="5.6.0"]){--t-icon-start: none;--t-icon-end: none;--t-zoom: calc(clamp(0px, var(--tui-font-offset) - 10px, 1px)/1px) }:where([tuiIcons][data-tui-version="5.6.0"]):before,:where([tuiIcons][data-tui-version="5.6.0"]):after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:var(--tui-icon-size, 1.5rem);flex-shrink:0;box-sizing:content-box;background:currentColor;zoom:calc(100% + 25% * var(--t-zoom));-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-size:calc(min(1em,100%) + 10 * var(--tui-stroke-width)) min(1em,100%),100%;mask-clip:padding-box}:where([tuiIcons][data-tui-version="5.6.0"]):after{display:var(--t-icon-end);-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-start=img]):before{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-start) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-end=img]):after{-webkit-mask-image:none;mask-image:none;background:var(--t-icon-end) no-repeat center / 1em padding-box}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-start=font]):before,:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-end=font]):after{display:grid;-webkit-mask-image:none;mask-image:none;background:none;font:1.5em / 1 var(--tui-font-icon, inherit);text-align:center;place-content:center;text-transform:none}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-start=font]):before{content:var(--t-icon-start)}:where([tuiIcons][data-tui-version="5.6.0"]):where([data-icon-end=font]):after{content:var(--t-icon-end)}\n']
    }]
  }], null, null);
})();
var TuiIcons = class _TuiIcons {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.nothing = tuiWithStyles(Styles2);
    this.start = computed(() => this.resolve(this.iconStart()));
    this.end = computed(() => this.resolve(this.iconEnd()));
    this.startMode = computed(() => tuiGetIconMode(this.iconStart()));
    this.endMode = computed(() => tuiGetIconMode(this.iconEnd()));
    this.iconEnd = input(inject(TUI_ICON_END, OPT));
    this.iconStart = input(inject(TUI_ICON_START, OPT));
  }
  resolve(icon) {
    if (!icon) {
      return null;
    }
    return tuiGetIconMode(icon) === "font" ? `'${this.resolver(icon)}'` : `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIcons,
      hostAttrs: ["data-tui-version", "5.6.0", "tuiIcons", ""],
      hostVars: 6,
      hostBindings: function TuiIcons_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-icon-end", ctx.endMode())("data-icon-start", ctx.startMode());
          ɵɵstyleProp("--t-icon-end", ctx.end())("--t-icon-start", ctx.start());
        }
      },
      inputs: {
        iconEnd: [1, "iconEnd"],
        iconStart: [1, "iconStart"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        tuiIcons: "",
        "[attr.data-icon-end]": "endMode()",
        "[attr.data-icon-start]": "startMode()",
        "[style.--t-icon-end]": "end()",
        "[style.--t-icon-start]": "start()"
      }
    }]
  }], null, null);
})();
function tuiIconStart(value, options) {
  return tuiDirectiveBinding(TuiIcons, "iconStart", value, options);
}
function tuiIconEnd(value, options = {}) {
  return tuiDirectiveBinding(TuiIcons, "iconEnd", value, options);
}
var TuiWithIcons = class _TuiWithIcons {
  static {
    this.ɵfac = function TuiWithIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithIcons,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-button.mjs
var TUI_BUTTON_DEFAULT_OPTIONS = {
  appearance: "primary",
  size: "l"
};
var [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions(TUI_BUTTON_DEFAULT_OPTIONS);
var Styles3 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-button-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiButton]:where(*[data-tui-version="5.6.0"]),[tuiIconButton]:where(*[data-tui-version="5.6.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.6.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>img,[tuiButton]:where(*[data-tui-version="5.6.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.6.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.6.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.6.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.6.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.6.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.6.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.6.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.6.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiButton]:where(*[data-tui-version="5.6.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.6.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.6.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-icon-start]:after{display:none}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles3, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-button-${TUI_VERSION}`,
      styles: ['[tuiButton]:where(*[data-tui-version="5.6.0"]),[tuiIconButton]:where(*[data-tui-version="5.6.0"]){--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, 0rem) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.6.0"])>img,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>img,[tuiButton]:where(*[data-tui-version="5.6.0"])>tui-icon,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>tui-icon,[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiAvatar],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiAvatar],[tuiButton]:where(*[data-tui-version="5.6.0"])>tui-badge,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>tui-badge,[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiBadge],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiBadge],[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiRadio],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiRadio],[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiSwitch],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiSwitch],[tuiButton]:where(*[data-tui-version="5.6.0"])>[tuiCheckbox],[tuiIconButton]:where(*[data-tui-version="5.6.0"])>[tuiCheckbox],[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{margin:var(--t-margin)}[tuiButton]:where(*[data-tui-version="5.6.0"])>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>.t-loader{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%)}[tuiButton]:where(*[data-tui-version="5.6.0"])>.t-loader .t-text,[tuiIconButton]:where(*[data-tui-version="5.6.0"])>.t-loader .t-text{position:absolute}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs] tui-icon,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=xs]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-typography-body-s)}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s] tui-icon,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s] tui-icon,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s]:not([tuiIconButton][data-appearance=icon],[tuiIconButton][data-appearance^=action]):after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end=font]:after{font-size:1rem}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=m],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-typography-body-m);font-weight:700}[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start=font]:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start=font]:before,[tuiButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end=font]:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end=font]:after{font-size:1.5rem}[tuiButton]:where(*[data-tui-version="5.6.0"])._loading,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]:where(*[data-tui-version="5.6.0"])._loading>*,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading>*,[tuiButton]:where(*[data-tui-version="5.6.0"])._loading:before,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading:before,[tuiButton]:where(*[data-tui-version="5.6.0"])._loading:after,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading:after{opacity:0}[tuiButton]:where(*[data-tui-version="5.6.0"])._loading>.t-loader,[tuiIconButton]:where(*[data-tui-version="5.6.0"])._loading>.t-loader{opacity:1}[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical],[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical]{--t-margin: 0rem !important;--t-line-height: 1rem;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-typography-ui-s)}[tuiButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical]>*,[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiButton]:where(*[data-tui-version="5.6.0"]):is(a):not([href]),[tuiIconButton]:where(*[data-tui-version="5.6.0"]):is(a):not([href]){opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiIconButton]:where(*[data-tui-version="5.6.0"]){gap:0;inline-size:var(--t-size);min-inline-size:var(--t-size);font-size:0!important;font-variant-ligatures:none!important;padding:0}[tuiIconButton]:where(*[data-tui-version="5.6.0"])[tuiIconButton]:where(*[data-tui-version="5.6.0"])[data-icon-start]:after{display:none}\n']
    }]
  }], null, null);
})();
var TuiButton = class _TuiButton {
  constructor() {
    this.nothing = tuiWithStyles(Styles3);
    this.size = input(inject(TUI_BUTTON_OPTIONS).size);
  }
  static {
    this.ɵfac = function TuiButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButton,
      selectors: [["a", "tuiButton", ""], ["button", "tuiButton", ""], ["a", "tuiIconButton", ""], ["button", "tuiIconButton", ""]],
      hostVars: 1,
      hostBindings: function TuiButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
    type: Directive,
    args: [{
      selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
      providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-cell.mjs
var [TUI_CELL_OPTIONS, tuiCellOptionsProvider] = tuiCreateOptions({
  height: "normal",
  size: "l"
});
var Styles4 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-cell-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiCell]:where(*[data-tui-version="5.6.0"]){--t-pad: .125rem 1rem;--t-radius: var(--tui-radius-s);transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-pad);min-block-size:var(--t-block-size);border-radius:var(--t-radius)}[tuiCell]:where(*[data-tui-version="5.6.0"]):is(button,label):not(:disabled):active{background:var(--tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version="5.6.0"]):disabled,[tuiCell]:where(*[data-tui-version="5.6.0"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.6.0"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version="5.6.0"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.6.0"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.6.0"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-block-size);align-items:center;align-self:stretch}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version="5.6.0"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:-.625rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-block-size: calc(var(--tui-height-s) - .125rem);--t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s][data-height=spacious]{--t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s][data-height=compact]{--t-block-size: calc(var(--tui-height-s) - .25rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>tui-avatar-stack [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiAccessories] [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiAccessories] tui-avatar-stack [tuiAvatar]{--t-size: 1.5rem;font:var(--tui-typography-body-m);font-size:.5625rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-block-size: calc(var(--tui-height-m) - .75rem);--t-pad: .375rem 1rem;gap:.75rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m][data-height=spacious]{--t-pad: 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m][data-height=compact]{--t-block-size: calc(var(--tui-height-m) - .5rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-s);gap:.125rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>tui-avatar-stack [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiAccessories] [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiAccessories] tui-avatar-stack [tuiAvatar]{--t-size: 2rem;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: .5rem 1rem;--t-radius: var(--tui-radius-l);gap:1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l][data-height=spacious]{--t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l][data-height=compact]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>[tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>tui-avatar-stack [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>[tuiAccessories] [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>[tuiAccessories] tui-avatar-stack [tuiAvatar]{--t-size: 2.5rem;font:var(--tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version="5.6.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}@media (hover: hover) and (pointer: fine){a[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:disabled,[data-state=disabled]){background:var(--tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:has(input:disabled)){background:var(--tui-background-neutral-1);cursor:pointer}}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles4, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-cell-${TUI_VERSION}`,
      styles: ['[tuiCell]:where(*[data-tui-version="5.6.0"]){--t-pad: .125rem 1rem;--t-radius: var(--tui-radius-s);transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;text-align:start;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-pad);min-block-size:var(--t-block-size);border-radius:var(--t-radius)}[tuiCell]:where(*[data-tui-version="5.6.0"]):is(button,label):not(:disabled):active{background:var(--tui-background-neutral-1)}[tuiCell]:where(*[data-tui-version="5.6.0"]):disabled,[tuiCell]:where(*[data-tui-version="5.6.0"])[data-state=disabled]{opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.6.0"]):disabled>*:not([tuiTooltip]),[tuiCell]:where(*[data-tui-version="5.6.0"])[data-state=disabled]>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.6.0"]):is(label):has(input:disabled){opacity:initial;pointer-events:none}[tuiCell]:where(*[data-tui-version="5.6.0"]):is(label):has(input:disabled)>*:not([tuiTooltip]){opacity:var(--tui-disabled-opacity)}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-block-size);align-items:center;align-self:stretch}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions]{position:absolute;z-index:1;inset-inline-end:0;padding-inline-end:inherit;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] button:focus-visible,[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiCellActions][tuiCellActions] a:focus-visible{opacity:1}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell]:where(*[data-tui-version="5.6.0"]) [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell]:where(*[data-tui-version="5.6.0"]) tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);inset-inline-start:-.625rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-block-size: calc(var(--tui-height-s) - .125rem);--t-pad: .1875rem 1rem;gap:.5rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s][data-height=spacious]{--t-pad: .4375rem 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s][data-height=compact]{--t-block-size: calc(var(--tui-height-s) - .25rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-typography-ui-s);gap:0}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>tui-avatar-stack [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiAccessories] [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiAccessories] tui-avatar-stack [tuiAvatar]{--t-size: 1.5rem;font:var(--tui-typography-body-m);font-size:.5625rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-block-size: calc(var(--tui-height-m) - .75rem);--t-pad: .375rem 1rem;gap:.75rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m][data-height=spacious]{--t-pad: 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m][data-height=compact]{--t-block-size: calc(var(--tui-height-m) - .5rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-s);gap:.125rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-ui-2xs)}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>tui-avatar-stack [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiAccessories] [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiAccessories] tui-avatar-stack [tuiAvatar]{--t-size: 2rem;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: .5rem 1rem;--t-radius: var(--tui-radius-l);gap:1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l][data-height=spacious]{--t-pad: 1.25rem 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l][data-height=compact]{--t-block-size: calc(var(--tui-height-l) - 1rem);--t-pad: 0 1rem}[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>[tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>tui-avatar-stack [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>[tuiAccessories] [tuiAvatar],[tuiCell]:where(*[data-tui-version="5.6.0"])[data-size=l]>[tuiAccessories] tui-avatar-stack [tuiAvatar]{--t-size: 2.5rem;font:var(--tui-typography-body-m);font-weight:700;align-self:flex-start}[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions]~*{opacity:0}[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions] button,[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions] a,[tuiCell]:where(*[data-tui-version="5.6.0"]):hover [tuiCellActions] label{opacity:1}[tuiCell]:where(*[data-tui-version="5.6.0"]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.125rem}@media (hover: hover) and (pointer: fine){a[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:disabled,[data-state=disabled]),button[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:disabled,[data-state=disabled]),label[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:disabled,[data-state=disabled]){background:var(--tui-background-neutral-1);cursor:pointer}label[tuiCell]:where(*[data-tui-version="5.6.0"]):hover:not(:has(input:disabled)){background:var(--tui-background-neutral-1);cursor:pointer}}\n']
    }]
  }], null, null);
})();
var TuiCell = class _TuiCell {
  constructor() {
    this.nothing = tuiWithStyles(Styles4);
    this.options = inject(TUI_CELL_OPTIONS);
    this.size = input(this.options.size, {
      alias: "tuiCell"
    });
    this.height = input(this.options.height, {
      alias: "tuiCellHeight"
    });
  }
  static {
    this.ɵfac = function TuiCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCell)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCell,
      selectors: [["", "tuiCell", "", 5, "ng-template"]],
      hostAttrs: ["data-tui-version", "5.6.0", "tuiCell", ""],
      hostVars: 2,
      hostBindings: function TuiCell_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-height", ctx.height())("data-size", ctx.size() || ctx.options.size || "l");
        }
      },
      inputs: {
        size: [1, "tuiCell", "size"],
        height: [1, "tuiCellHeight", "height"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "s"
      })])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCell, [{
    type: Directive,
    args: [{
      selector: "[tuiCell]:not(ng-template)",
      providers: [tuiButtonOptionsProvider({
        size: "s"
      })],
      host: {
        "data-tui-version": TUI_VERSION,
        tuiCell: "",
        "[attr.data-height]": "height()",
        "[attr.data-size]": 'size() || options.size || "l"'
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c0 = ["*"];
function TuiDataListComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiDataListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, TuiDataListComponent_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent() || ctx_r1.fallback());
  }
}
var TUI_DATA_LIST_HOST = new InjectionToken(ngDevMode ? "TUI_DATA_LIST_HOST" : "");
function tuiAsDataListHost(host) {
  return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TUI_OPTION_CONTENT = new InjectionToken(ngDevMode ? "TUI_OPTION_CONTENT" : "");
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var TuiWithOptionContent = class _TuiWithOptionContent {
  constructor() {
    this.local = null;
    this.global = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
  }
  get content() {
    return this.global ?? this.local;
  }
  static {
    this.ɵfac = function TuiWithOptionContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithOptionContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithOptionContent,
      contentQueries: function TuiWithOptionContent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_OPTION_CONTENT, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.local = _t.first);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithOptionContent, [{
    type: Directive
  }], null, {
    local: [{
      type: ContentChild,
      args: [TUI_OPTION_CONTENT, {
        descendants: true
      }]
    }]
  });
})();
var TuiOptionWithContent = class _TuiOptionWithContent {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.ref = this.content && createComponent(this.content, {
      environmentInjector: inject(EnvironmentInjector),
      elementInjector: inject(INJECTOR$1),
      hostElement: tuiInjectElement()
    });
    if (this.ref) {
      this.vcr.insert(this.ref.hostView);
      this.ref.changeDetectorRef.detectChanges();
    }
  }
  static {
    this.ɵfac = function TuiOptionWithContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptionWithContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptionWithContent
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithContent, [{
    type: Directive
  }], () => [], null);
})();
var TuiOptionWithValue = class _TuiOptionWithValue {
  constructor() {
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.disabled = input(false);
    this.value = input();
  }
  onClick(value = this.value()) {
    if (value !== void 0) {
      this.host?.handleOption?.(value);
    }
  }
  static {
    this.ɵfac = function TuiOptionWithValue_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptionWithValue)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptionWithValue,
      selectors: [["button", "tuiOption", "", "value", ""], ["a", "tuiOption", "", "value", ""], ["label", "tuiOption", "", "value", ""]],
      hostBindings: function TuiOptionWithValue_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiOptionWithValue_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        disabled: [1, "disabled"],
        value: [1, "value"]
      },
      features: [ɵɵHostDirectivesFeature([TuiOptionWithContent])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptionWithValue, [{
    type: Directive,
    args: [{
      selector: "button[tuiOption][value], a[tuiOption][value], label[tuiOption][value]",
      hostDirectives: [TuiOptionWithContent],
      host: {
        "(click)": "onClick()"
      }
    }]
  }], null, null);
})();
function tuiInjectDataListSize() {
  const sizes = ["s", "m", "l"];
  const size = inject(TUI_DATA_LIST_HOST, {
    optional: true
  })?.size;
  return size && sizes.includes(size) ? size : "l";
}
var TuiDataListComponent = class _TuiDataListComponent {
  constructor() {
    this.ngZone = inject(NgZone);
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.optionsQuery = contentChildren(forwardRef(() => TuiOptionWithValue), {
      descendants: true
    });
    this.fallback = inject(TUI_NOTHING_FOUND_MESSAGE);
    this.empty = signal(false);
    this.emptyContent = input();
    this.size = input(tuiInjectDataListSize());
    this.options = computed(() => this.optionsQuery().map(({
      value
    }) => value()).filter(tuiIsPresent));
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  handleFocusLossIfNecessary(element = this.el) {
    if (tuiIsFocusedIn(element)) {
      this.origin?.focus({
        preventScroll: true
      });
    }
  }
  ngAfterContentChecked() {
    timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.empty.set(!this.elements.length);
      this.cdr.detectChanges();
    });
  }
  get role() {
    return this.el.parentElement?.closest('[role="menu"],[role="listbox"]') ? null : this.el.role;
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  get elements() {
    return Array.from(this.el.querySelectorAll("[tuiOption]:not(.t-empty)"));
  }
  static {
    this.ɵfac = function TuiDataListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListComponent,
      selectors: [["tui-data-list"]],
      contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.optionsQuery, TuiOptionWithValue, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["data-tui-version", "5.6.0", "role", "listbox"],
      hostVars: 2,
      hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
            return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
          })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          })("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
            return 0;
          })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
            return ctx.handleFocusLossIfNecessary($event.target);
          })("wheel.zoneless.passive", function TuiDataListComponent_wheel_zoneless_passive_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size())("role", ctx.role);
        }
      },
      inputs: {
        emptyContent: [1, "emptyContent"],
        size: [1, "size"]
      },
      features: [ɵɵProvidersFeature([tuiCellOptionsProvider(() => ({
        size: inject(_TuiDataListComponent).size()
      })), tuiAsAuxiliary(_TuiDataListComponent), {
        provide: TUI_OPTION_CONTENT,
        useFactory: () => inject(TuiWithOptionContent, {
          optional: true
        })?.content ?? inject(TUI_OPTION_CONTENT, {
          skipSelf: true,
          optional: true
        })
      }])],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [["tuiCell", "", "tuiOption", "", 1, "t-empty"], [4, "polymorpheusOutlet"]],
      template: function TuiDataListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵconditionalCreate(1, TuiDataListComponent_Conditional_1_Template, 2, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.empty() ? 1 : -1);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiCell],
      styles: ['tui-data-list:where(*[data-tui-version="5.6.0"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version="5.6.0"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=l] [tuiOption]{font:var(--tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;box-sizing:border-box;border-radius:var(--tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media (hover: hover) and (pointer: fine){tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:hover:not(:disabled){background:var(--tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]._with-dropdown{background:var(--tui-background-neutral-1)}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version="5.6.0"])>.t-empty{pointer-events:none;color:var(--tui-text-tertiary)}tui-data-list:where(*[data-tui-version="5.6.0"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version="5.6.0"]) hr+hr,tui-data-list:where(*[data-tui-version="5.6.0"]) hr:first-child,tui-data-list:where(*[data-tui-version="5.6.0"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version="5.6.0"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:"";block-size:1px;inline-size:100%;background:var(--tui-border-normal)}tui-opt-group:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.6.0"]){font:var(--tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.6.0"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.6.0"]){font:var(--tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.6.0"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.6.0"]){font:var(--tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.6.0"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version="5.6.0"]):empty:before,tui-opt-group:where(*[data-tui-version="5.6.0"])[data-label=""]:before{display:none}tui-opt-group:where(*[data-tui-version="5.6.0"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version="5.6.0"]):before{font:var(--tui-typography-heading-h6);padding:.5rem 0!important}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      selector: "tui-data-list",
      imports: [PolymorpheusOutlet, TuiCell],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiCellOptionsProvider(() => ({
        size: inject(TuiDataListComponent).size()
      })), tuiAsAuxiliary(TuiDataListComponent), {
        provide: TUI_OPTION_CONTENT,
        useFactory: () => inject(TuiWithOptionContent, {
          optional: true
        })?.content ?? inject(TUI_OPTION_CONTENT, {
          skipSelf: true,
          optional: true
        })
      }],
      host: {
        "data-tui-version": TUI_VERSION,
        role: "listbox",
        "[attr.data-size]": "size()",
        "[attr.role]": "role",
        "(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)",
        "(keydown.shift.tab)": "handleFocusLossIfNecessary()",
        "(keydown.tab)": "handleFocusLossIfNecessary()",
        "(mousedown.prevent)": "(0)",
        "(mouseleave)": "handleFocusLossIfNecessary($event.target)",
        "(wheel.zoneless.passive)": "handleFocusLossIfNecessary()"
      },
      template: '<ng-content />\n@if (empty()) {\n    <!-- tuiOption selector purely for cosmetics, do not import -->\n    <span\n        tuiCell\n        tuiOption\n        class="t-empty"\n    >\n        <ng-container *polymorpheusOutlet="emptyContent() || fallback() as text">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n',
      styles: ['tui-data-list:where(*[data-tui-version="5.6.0"]){display:flex;flex-direction:column;padding:.25rem}tui-data-list:where(*[data-tui-version="5.6.0"]):focus-within [tuiOption]._with-dropdown:not(:focus){background:transparent}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiOption]{min-block-size:0;font:var(--tui-typography-ui-s);padding:.375rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiOption]:before,tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiOption]:after{font-size:1rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiOption]{min-block-size:2.25rem;font:var(--tui-typography-ui-s);padding:.5rem .375rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=l]{gap:.125rem;padding:.5rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=l] [tuiOption]{font:var(--tui-typography-ui-m);padding-inline:.5rem}tui-data-list:where(*[data-tui-version="5.6.0"])[data-size=l] hr{block-size:1rem;border-inline-width:.5rem}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;box-sizing:border-box;border-radius:var(--tui-radius-s);outline:none!important;cursor:pointer;word-break:break-word;text-transform:inherit}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}@media (hover: hover) and (pointer: fine){tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:hover:not(:disabled){background:var(--tui-background-neutral-1)}}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:active:not(:disabled),tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:focus-within,tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]._with-dropdown{background:var(--tui-background-neutral-1)}tui-data-list:where(*[data-tui-version="5.6.0"]) [tuiOption]:after{margin-inline-start:auto}tui-data-list:where(*[data-tui-version="5.6.0"])>.t-empty{pointer-events:none;color:var(--tui-text-tertiary)}tui-data-list:where(*[data-tui-version="5.6.0"]) hr{position:relative;margin:0;block-size:.75rem;border:.375rem solid transparent;border-block:0}tui-data-list:where(*[data-tui-version="5.6.0"]) hr+hr,tui-data-list:where(*[data-tui-version="5.6.0"]) hr:first-child,tui-data-list:where(*[data-tui-version="5.6.0"]) hr:last-child{display:none}tui-data-list:where(*[data-tui-version="5.6.0"]) hr:before{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);content:"";block-size:1px;inline-size:100%;background:var(--tui-border-normal)}tui-opt-group:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;font-weight:700!important;gap:inherit;color:var(--tui-text-primary);flex-direction:column}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.6.0"]){font:var(--tui-typography-body-s)}tui-data-list[data-size=s] tui-opt-group:where(*[data-tui-version="5.6.0"]):before{padding:.1875rem .375rem}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.6.0"]){font:var(--tui-typography-ui-m)}tui-data-list[data-size=m] tui-opt-group:where(*[data-tui-version="5.6.0"]):before{padding:.375rem}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.6.0"]){font:var(--tui-typography-ui-l)}tui-data-list[data-size=l] tui-opt-group:where(*[data-tui-version="5.6.0"]):before{padding:.5rem}tui-opt-group:where(*[data-tui-version="5.6.0"]):empty:before,tui-opt-group:where(*[data-tui-version="5.6.0"])[data-label=""]:before{display:none}tui-opt-group:where(*[data-tui-version="5.6.0"]):before{content:attr(data-label);word-break:break-word}tui-sheet-dialog tui-opt-group:where(*[data-tui-version="5.6.0"]):before{font:var(--tui-typography-heading-h6);padding:.5rem 0!important}\n']
    }]
  }], null, null);
})();
var TuiOptGroup = class _TuiOptGroup {
  constructor() {
    this.label = input();
  }
  static {
    this.ɵfac = function TuiOptGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptGroup,
      selectors: [["tui-opt-group"]],
      hostAttrs: ["data-tui-version", "5.6.0", "role", "group"],
      hostVars: 1,
      hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-label", ctx.label() || "");
        }
      },
      inputs: {
        label: [1, "label"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
    type: Directive,
    args: [{
      selector: "tui-opt-group",
      host: {
        "data-tui-version": TUI_VERSION,
        role: "group",
        "[attr.data-label]": 'label() || ""'
      }
    }]
  }], null, null);
})();
var TuiOption = class _TuiOption {
  constructor() {
    this.isMobile = inject(WA_IS_MOBILE);
    this.el = tuiInjectElement();
    this.datalist = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = input(false);
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.datalist?.handleFocusLossIfNecessary(this.el);
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsFocused(this.el) && this.datalist && this.el.closest("[tuiDataListDropdownManager]")) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
  static {
    this.ɵfac = function TuiOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOption)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOption,
      selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""], ["label", "tuiOption", ""]],
      hostAttrs: ["role", "option", "type", "button"],
      hostVars: 3,
      hostBindings: function TuiOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.zoneless", function TuiOption_mousemove_zoneless_HostBindingHandler() {
            return ctx.onMouseMove();
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabled() || null);
          ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
        }
      },
      inputs: {
        disabled: [1, "disabled"]
      },
      features: [ɵɵHostDirectivesFeature([TuiWithIcons, TuiCell])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
    type: Directive,
    args: [{
      selector: "button[tuiOption], a[tuiOption], label[tuiOption]",
      hostDirectives: [TuiWithIcons, TuiCell],
      host: {
        role: "option",
        type: "button",
        "[attr.disabled]": "disabled() || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(mousemove.zoneless)": "onMouseMove()"
      }
    }]
  }], null, null);
})();
var TuiDataList = [TuiDataListComponent, TuiOption, TuiOptionWithValue, TuiOptGroup];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var Styles5 = class _Styles {
  static {
    this.ɵfac = function Styles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Styles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _Styles,
      selectors: [["ng-component"]],
      exportAs: ["tui-label-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiLabel]:where(*[data-tui-version="5.6.0"]){display:flex;gap:.25rem;flex-direction:column;font:var(--tui-typography-body-s);color:var(--tui-text-primary)}[tuiLabel]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=radio]{margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.6.0"]) small{font:var(--tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Styles5, [{
    type: Component,
    args: [{
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: `tui-label-${TUI_VERSION}`,
      styles: ['[tuiLabel]:where(*[data-tui-version="5.6.0"]){display:flex;gap:.25rem;flex-direction:column;font:var(--tui-typography-body-s);color:var(--tui-text-primary)}[tuiLabel]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical]){flex-direction:row;inline-size:fit-content;font:var(--tui-typography-body-m)}[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=checkbox],[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=radio]{margin-inline-end:.5rem}[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=checkbox][data-size=s],[tuiLabel]:where(*[data-tui-version="5.6.0"]) input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.6.0"]) small{font:var(--tui-typography-body-s)}[tuiLabel]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{margin-block-start:.125rem}[tuiLabel]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{color:var(--tui-text-secondary)}\n']
    }]
  }], null, null);
})();
var TuiLabel = class _TuiLabel {
  constructor() {
    this.textfield = contentChild(forwardRef(() => TUI_DATA_LIST_HOST));
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(Styles5);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
  static {
    this.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLabel)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLabel,
      selectors: [["label", "tuiLabel", ""]],
      contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.textfield, TUI_DATA_LIST_HOST, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: ["data-tui-version", "5.6.0"],
      hostVars: 2,
      hostBindings: function TuiLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.textfield() ? "vertical" : "horizontal")("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id));
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      selector: "label[tuiLabel]",
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-orientation]": 'textfield() ? "vertical" : "horizontal"',
        "[attr.for]": "el.htmlFor || parent?.id"
      }
    }]
  }], null, null);
})();

export {
  TuiTransitioned,
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance,
  TuiIcons,
  tuiIconStart,
  tuiIconEnd,
  TuiWithIcons,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  tuiButtonOptionsProvider,
  TuiButton,
  TUI_CELL_OPTIONS,
  tuiCellOptionsProvider,
  TuiCell,
  TUI_DATA_LIST_HOST,
  tuiAsDataListHost,
  TUI_OPTION_CONTENT,
  tuiAsOptionContent,
  TuiWithOptionContent,
  TuiOptionWithContent,
  TuiOptionWithValue,
  tuiInjectDataListSize,
  TuiDataListComponent,
  TuiOptGroup,
  TuiOption,
  TuiDataList,
  TuiLabel
};
//# sourceMappingURL=chunk-4JQEN4LD.js.map

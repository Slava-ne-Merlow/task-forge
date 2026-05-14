import {
  TuiItem
} from "./chunk-AGMBXRJW.js";
import {
  TUI_DATA_LIST_HOST,
  TuiAppearance,
  TuiButton,
  TuiCell,
  TuiIcons,
  TuiLabel,
  TuiWithAppearance,
  TuiWithIcons,
  TuiWithOptionContent,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiAsDataListHost,
  tuiButtonOptionsProvider,
  tuiIconEnd,
  tuiIconStart
} from "./chunk-4JQEN4LD.js";
import {
  CHAR_EN_DASH,
  CHAR_HYPHEN,
  CHAR_NO_BREAK_SPACE,
  EMPTY_CLIENT_RECT,
  EMPTY_FUNCTION,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  TUI_ANIMATIONS_SPEED,
  TUI_AUXILIARY,
  TUI_BREAKPOINT,
  TUI_CLEAR_WORD,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DEFAULT_MATCHER,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_FALLBACK_VALUE,
  TUI_FALSE_HANDLER,
  TUI_ICON_START,
  TUI_LEAVE,
  TUI_MONTHS,
  TUI_OPTIONS,
  TUI_PLATFORM,
  TUI_REDUCED_MOTION,
  TUI_SCROLLBAR_OPTIONS,
  TUI_SCROLL_REF,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_TEXTS,
  TUI_STRICT_MATCHER,
  TUI_TEXTFIELD_VALUE,
  TUI_TRUE_HANDLER,
  TUI_VERSION,
  TUI_VIEWPORT,
  TuiActiveZone,
  TuiAnimated,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdownContent,
  TuiDropdownDirective,
  TuiDropdownFixed,
  TuiDropdownOpen,
  TuiFontSize,
  TuiPopupService,
  TuiPopups,
  TuiPortal,
  TuiPortalDirective,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRectAccessor,
  TuiScrollControls,
  TuiScrollIntoView,
  TuiScrollRef,
  TuiScrollbar,
  TuiVisualViewportService,
  TuiWithDropdownOpen,
  WA_ANIMATION_FRAME,
  WA_IS_ANDROID,
  WA_IS_IOS,
  WA_IS_MOBILE,
  WA_WINDOW,
  coerceBooleanProperty,
  injectContext,
  isSafari,
  outputFromObservable,
  takeUntilDestroyed,
  toObservable,
  toSignal,
  tuiArrayToggle,
  tuiAsAuxiliary,
  tuiAsDriver,
  tuiAsPortal,
  tuiAsRectAccessor,
  tuiAsVehicle,
  tuiClamp,
  tuiCloseWatcher,
  tuiContainsOrAfter,
  tuiControlValue,
  tuiCreateOptions,
  tuiFallbackAccessor,
  tuiFallbackValueProvider,
  tuiFocusedIn,
  tuiGenerateId,
  tuiGetActualTarget,
  tuiGetClosestFocusable,
  tuiGetDuration,
  tuiGetFocused,
  tuiGetViewportWidth,
  tuiIfMap,
  tuiInRange,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsElement,
  tuiIsFlat,
  tuiIsFocused,
  tuiIsHTMLElement,
  tuiIsNumber,
  tuiIsObscured,
  tuiIsPresent,
  tuiIsString,
  tuiNormalizeToIntNumber,
  tuiNullableSame,
  tuiOverrideOptions,
  tuiPointToClientRect,
  tuiPositionAccessorFor,
  tuiProvide,
  tuiPx,
  tuiRectAccessorFor,
  tuiRound,
  tuiRoundWith,
  tuiSetSignal,
  tuiTakeUntilDestroyed,
  tuiTypedFromEvent,
  tuiValue,
  tuiWatch,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-557WZTX7.js";
import {
  NG_VALIDATORS,
  NgControl,
  NgModel,
  RadioControlValueAccessor,
  Validators
} from "./chunk-3J66KCLA.js";
import {
  ActivationStart,
  Router
} from "./chunk-QKH4DEBI.js";
import {
  AsyncPipe,
  NgTemplateOutlet
} from "./chunk-BTOGBD7R.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  NgZone,
  Optional,
  Output,
  Pipe,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  assertInInjectionContext,
  computed,
  contentChild,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-OKKZ2MNK.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __objRest,
  __spreadProps,
  __spreadValues,
  combineLatest,
  debounce,
  delay,
  distinctUntilChanged,
  exhaustMap,
  filter,
  fromEvent,
  identity,
  isObservable,
  map,
  merge,
  of,
  race,
  repeat,
  shareReplay,
  skip,
  skipWhile,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer
} from "./chunk-PJVWDKLX.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-validator.mjs
var TuiValidator = class _TuiValidator {
  constructor() {
    this.onChange = EMPTY_FUNCTION;
    this.validate = Validators.nullValidator;
  }
  registerOnValidatorChange(onChange) {
    this.onChange = onChange;
  }
  ngOnChanges() {
    this.onChange();
  }
  static {
    this.ɵfac = function TuiValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiValidator,
      selectors: [["", "tuiValidator", ""]],
      inputs: {
        validate: [0, "tuiValidator", "validate"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiValidator, true)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidator, [{
    type: Directive,
    args: [{
      selector: "[tuiValidator]",
      inputs: ["validate: tuiValidator"],
      providers: [tuiProvide(NG_VALIDATORS, TuiValidator, true)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-items-handlers.mjs
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: signal(String),
  identityMatcher: signal(TUI_DEFAULT_IDENTITY_MATCHER),
  disabledItemHandler: signal(TUI_FALSE_HANDLER)
};
var TUI_ITEMS_HANDLERS = new InjectionToken(ngDevMode ? "TUI_ITEMS_HANDLERS" : "", {
  factory: () => TUI_DEFAULT_ITEMS_HANDLERS
});
function tuiItemsHandlersProvider(options) {
  return {
    provide: TUI_ITEMS_HANDLERS,
    deps: [[new Optional(), new SkipSelf(), TUI_ITEMS_HANDLERS]],
    useFactory: (parent) => __spreadValues({
      stringify: signal(parent?.stringify() ?? TUI_DEFAULT_ITEMS_HANDLERS.stringify()),
      identityMatcher: signal(parent?.identityMatcher() ?? TUI_DEFAULT_ITEMS_HANDLERS.identityMatcher()),
      disabledItemHandler: signal(parent?.disabledItemHandler() ?? TUI_DEFAULT_ITEMS_HANDLERS.disabledItemHandler())
    }, options)
  };
}
var TuiItemsHandlersDirective = class _TuiItemsHandlersDirective {
  constructor() {
    this.handlers = inject(TUI_ITEMS_HANDLERS, {
      skipSelf: true
    });
    this.stringify = input(this.handlers.stringify());
    this.identityMatcher = input(this.handlers.identityMatcher());
    this.disabledItemHandler = input(this.handlers.disabledItemHandler());
  }
  static {
    this.ɵfac = function TuiItemsHandlersDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsHandlersDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsHandlersDirective,
      inputs: {
        stringify: [1, "stringify"],
        identityMatcher: [1, "identityMatcher"],
        disabledItemHandler: [1, "disabledItemHandler"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ITEMS_HANDLERS, _TuiItemsHandlersDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersDirective, [{
    type: Directive,
    args: [{
      providers: [tuiProvide(TUI_ITEMS_HANDLERS, TuiItemsHandlersDirective)]
    }]
  }], null, null);
})();
var TuiWithItemsHandlers = class _TuiWithItemsHandlers {
  static {
    this.ɵfac = function TuiWithItemsHandlers_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithItemsHandlers)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithItemsHandlers,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiItemsHandlersDirective,
        inputs: ["stringify", "stringify", "identityMatcher", "identityMatcher", "disabledItemHandler", "disabledItemHandler"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithItemsHandlers, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiItemsHandlersDirective,
        inputs: ["stringify", "identityMatcher", "disabledItemHandler"]
      }]
    }]
  }], null, null);
})();
var TuiItemsHandlersValidator = class _TuiItemsHandlersValidator extends TuiValidator {
  constructor() {
    super(...arguments);
    this.handlers = inject(TuiItemsHandlersDirective);
    this.initialized = false;
    this.update = effect(() => {
      this.handlers.disabledItemHandler();
      if (this.initialized) {
        this.onChange();
      } else {
        this.initialized = true;
      }
    });
    this.disabledItemHandler = (value) => Array.isArray(value) ? value.some((item) => this.handlers.disabledItemHandler()(item)) : Boolean(value) && this.handlers.disabledItemHandler()(value);
    this.validate = ({
      value
    }) => this.disabledItemHandler(value) ? {
      tuiDisabledItem: value
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiItemsHandlersValidator_BaseFactory;
      return function TuiItemsHandlersValidator_Factory(__ngFactoryType__) {
        return (ɵTuiItemsHandlersValidator_BaseFactory || (ɵTuiItemsHandlersValidator_BaseFactory = ɵɵgetInheritedFactory(_TuiItemsHandlersValidator)))(__ngFactoryType__ || _TuiItemsHandlersValidator);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsHandlersValidator,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiItemsHandlersValidator, true)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsHandlersValidator, [{
    type: Directive,
    args: [{
      providers: [tuiProvide(NG_VALIDATORS, TuiItemsHandlersValidator, true)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var [TUI_LINK_OPTIONS, tuiLinkOptionsProvider] = tuiCreateOptions({
  appearance: "action"
});
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
      exportAs: ["tui-link-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiLink]:where(*[data-tui-version="5.6.0"]){transition-property:color,text-decoration,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version="5.6.0"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version="5.6.0"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,[tuiLink]:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version="5.6.0"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media (hover: hover) and (pointer: fine){[tuiLink]:where(*[data-tui-version="5.6.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version="5.6.0"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.6.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.6.0"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.6.0"])[data-appearance=""]{text-decoration-line:underline;text-decoration-style:solid}\n'],
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
      exportAs: `tui-link-${TUI_VERSION}`,
      styles: ['[tuiLink]:where(*[data-tui-version="5.6.0"]){transition-property:color,text-decoration,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;border-radius:.125rem;outline-width:1px;outline-offset:-1px;text-underline-offset:.2em;text-decoration:none dashed currentColor 1px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:where(*[data-tui-version="5.6.0"]):before{margin-inline-end:.25rem}[tuiLink]:where(*[data-tui-version="5.6.0"]):after{margin-inline-start:.25rem}[tuiLink]:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,[tuiLink]:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;transition:none}[tuiLink]:where(*[data-tui-version="5.6.0"])[tuiChevron]:after{display:inline-block;vertical-align:initial}@media (hover: hover) and (pointer: fine){[tuiLink]:where(*[data-tui-version="5.6.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){text-decoration-color:currentColor}}[tuiLink]:where(*[data-tui-version="5.6.0"])[data-state=hover]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.6.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):active:not([data-state]){text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.6.0"])[data-state=active]{text-decoration-color:currentColor}[tuiLink]:where(*[data-tui-version="5.6.0"])[data-appearance=""]{text-decoration-line:underline;text-decoration-style:solid}\n']
    }]
  }], null, null);
})();
var TuiLink = class _TuiLink {
  constructor() {
    this.nothing = tuiWithStyles(Styles);
  }
  static {
    this.ɵfac = function TuiLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLink)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLink,
      selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
      hostAttrs: ["tuiLink", ""],
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
    type: Directive,
    args: [{
      selector: "a[tuiLink], button[tuiLink]",
      providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        tuiLink: ""
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-spin-button.mjs
var _c0 = ["*"];
function TuiSpinButton_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 0);
    ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 1);
    ɵɵprojection(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 2);
    ɵɵlistener("click", function TuiSpinButton_Conditional_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightClick());
    });
    ɵɵtext(5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.leftDisabled());
    ɵɵproperty("iconStart", ctx_r1.icons.decrement)("tabIndex", ctx_r1.focusable() ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[0], " ");
    ɵɵadvance(3);
    ɵɵclassProp("t-button_hidden", ctx_r1.disabled() || ctx_r1.rightDisabled());
    ɵɵproperty("iconStart", ctx_r1.icons.increment)("tabIndex", ctx_r1.focusable() ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[1], " ");
  }
}
var TuiSpinButton = class _TuiSpinButton {
  constructor() {
    this.icons = inject(TUI_COMMON_ICONS);
    this.spinTexts = inject(TUI_SPIN_TEXTS);
    this.focusable = input(true);
    this.disabled = input(false);
    this.leftDisabled = input(false);
    this.rightDisabled = input(false);
    this.leftClick = output();
    this.rightClick = output();
  }
  onLeftClick() {
    if (!this.disabled() && !this.leftDisabled()) {
      this.leftClick.emit();
    }
  }
  onRightClick() {
    if (!this.disabled() && !this.rightDisabled()) {
      this.rightClick.emit();
    }
  }
  static {
    this.ɵfac = function TuiSpinButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSpinButton)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSpinButton,
      selectors: [["tui-spin-button"]],
      hostBindings: function TuiSpinButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft.prevent", function TuiSpinButton_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.onLeftClick();
          })("keydown.arrowRight.prevent", function TuiSpinButton_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.onRightClick();
          })("mousedown.zoneless.prevent", function TuiSpinButton_mousedown_zoneless_prevent_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        focusable: [1, "focusable"],
        disabled: [1, "disabled"],
        leftDisabled: [1, "leftDisabled"],
        rightDisabled: [1, "rightDisabled"]
      },
      outputs: {
        leftClick: "leftClick",
        rightClick: "rightClick"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [["appearance", "flat", "automation-id", "tui-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart", "tabIndex"]],
      template: function TuiSpinButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, TuiSpinButton_Conditional_0_Template, 6, 10);
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional((tmp_0_0 = ctx.spinTexts()) ? 0 : -1, tmp_0_0);
        }
      },
      dependencies: [TuiButton],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-typography-body-l);text-align:center;font-weight:700}.t-button[_ngcontent-%COMP%]{transform:scaleX(var(--tui-inline))}.t-button_hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSpinButton, [{
    type: Component,
    args: [{
      selector: "tui-spin-button",
      imports: [TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(keydown.arrowLeft.prevent)": "onLeftClick()",
        "(keydown.arrowRight.prevent)": "onRightClick()",
        "(mousedown.zoneless.prevent)": "(0)"
      },
      template: '@if (spinTexts(); as texts) {\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__left"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled() || leftDisabled()"\n        [iconStart]="icons.decrement"\n        [tabIndex]="focusable() ? 0 : -1"\n        (click)="onLeftClick()"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class="t-content t-calendar-title">\n        <ng-content />\n    </span>\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__right"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [class.t-button_hidden]="disabled() || rightDisabled()"\n        [iconStart]="icons.increment"\n        [tabIndex]="focusable() ? 0 : -1"\n        (click)="onRightClick()"\n    >\n        {{ texts[1] }}\n    </button>\n}\n',
      styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-typography-body-l);text-align:center;font-weight:700}.t-button{transform:scaleX(var(--tui-inline))}.t-button_hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-date-time.mjs
var DAYS_IN_WEEK = 7;
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var MAX_DISPLAYED_YEAR = 2099;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TuiDayOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};
var TuiMonthNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from, to) {
    return to.year - from.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({ year }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({ year }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({ year }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({ year }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({ year }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({ year = 0 }) {
    ngDevMode && console.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && console.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && console.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && console.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.November:
      case TuiMonthNumber.September:
        return 30;
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from, to) {
    const absoluteFrom = from.month + from.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({ year = 0, month = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = new Date(this.year, this.month);
    date.setFullYear(this.year);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  /**
   * @param year
   * @param month (starting with 0)
   * @param day
   */
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && console.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "dd/mm/yyyy") {
    ngDevMode && console.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "mm/dd/yyyy":
        return {
          day: Number.parseInt(date.slice(3, 5), 10),
          month: Number.parseInt(date.slice(0, 2), 10) - 1,
          year: Number.parseInt(date.slice(6, 10), 10)
        };
      case "yyyy/mm/dd":
        return {
          day: Number.parseInt(date.slice(8, 10), 10),
          month: Number.parseInt(date.slice(5, 7), 10) - 1,
          year: Number.parseInt(date.slice(0, 4), 10)
        };
      case "dd/mm/yyyy":
      default:
        return {
          day: Number.parseInt(date.slice(0, 2), 10),
          month: Number.parseInt(date.slice(3, 5), 10) - 1,
          year: Number.parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (dd/mm/yyyy | mm/dd/yyyy | yyyy/mm/dd)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "dd/mm/yyyy") {
    const { day, month, year } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param ymdString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(ymdString) {
    const { day, month, year } = this.parseRawDateString(ymdString, "yyyy/mm/dd");
    if (!TuiMonth.isValidMonth(year, month) || !Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(year, month, day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equal to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    return max !== null && this.dayAfter(max) ? max : this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({ year = 0, month = 0, day = 0 }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    const monthDaysCount = TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    const currentMonthDaysCount = TuiMonth.getMonthDaysCount(this.month, TuiYear.isLeapYear(years));
    let days = day;
    if (this.day >= monthDaysCount) {
      days += this.day - (currentMonthDaysCount - monthDaysCount);
    } else if (currentMonthDaysCount < monthDaysCount && this.day === currentMonthDaysCount) {
      days += this.day + (monthDaysCount - currentMonthDaysCount);
    } else {
      days += this.day;
    }
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && console.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "mm/dd/yyyy":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "yyyy/mm/dd":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "dd/mm/yyyy":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "dd/mm/yyyy", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    const date = super.toLocalNativeDate();
    date.setDate(this.day);
    return date;
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiInvalidDayException = class extends Error {
  constructor(year, month, day) {
    super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : "");
  }
};
var TuiMonthRange = class _TuiMonthRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new _TuiMonthRange(month1, month2) : new _TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  monthInRange(month) {
    return this.from.monthSameOrBefore(month) && this.to.monthSameOrAfter(month);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
};
var TuiDayRange = class _TuiDayRange extends TuiMonthRange {
  constructor(from, to) {
    super(from, to);
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new _TuiDayRange(day1, day2) : new _TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd/mm/yyyy - dd/mm/yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = "dd/mm/yyyy") {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    return rangeString.length < DATE_RANGE_FILLER_LENGTH ? new _TuiDayRange(leftDay, leftDay) : _TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  dayInRange(day) {
    return this.from.daySameOrBefore(day) && this.to.daySameOrAfter(day);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new _TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = "dd/mm/yyyy", dateSeparator = ".") {
    return this.getFormattedDayRange(dateFormat, dateSeparator);
  }
  toArray() {
    const { from, to } = this;
    const arr = [];
    for (const day = from.toUtcNativeDate(); day <= to.toUtcNativeDate(); day.setDate(day.getDate() + 1)) {
      arr.push(TuiDay.fromLocalNativeDate(day));
    }
    return arr;
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TUI_LAST_DISPLAYED_DAY = new TuiDay(MAX_DISPLAYED_YEAR, MAX_MONTH, 31);
var TuiTime = class _TuiTime {
  constructor(hours, minutes, seconds = 0, ms = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ms = ms;
    ngDevMode && console.assert(
      // Currently `TuiTime` could have hours more than 23
      // in order to not break current behaviour of `isValidTime` the logic is duplicated
      Number.isInteger(hours) && tuiInRange(hours, 0, Infinity) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3),
      "Time must be real, but got:",
      hours,
      minutes,
      seconds,
      ms
    );
  }
  /**
   * Checks if time is valid
   */
  static isValidTime(hours, minutes, seconds = 0, ms = 0) {
    return Number.isInteger(hours) && tuiInRange(hours, 0, HOURS_IN_DAY) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3);
  }
  /**
   * Current UTC time.
   */
  static current() {
    return _TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
  }
  /**
   * Current time in local timezone
   */
  static currentLocal() {
    const date = /* @__PURE__ */ new Date();
    return _TuiTime.fromAbsoluteMilliseconds((Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) % MILLISECONDS_IN_DAY);
  }
  /**
   * Calculates TuiTime from milliseconds
   */
  static fromAbsoluteMilliseconds(milliseconds) {
    ngDevMode && console.assert(Number.isInteger(milliseconds) && milliseconds >= 0, "Milliseconds must be a non-negative integer.");
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor(milliseconds % MILLISECONDS_IN_HOUR / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE / 1e3) || 0;
    const ms = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE % 1e3) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Parses string into TuiTime object
   */
  static fromString(time) {
    const hours = this.parseHours(time);
    const minutes = Number(time.slice(3, 5)) || 0;
    const seconds = Number(time.slice(6, 8)) || 0;
    const ms = Number(time.slice(9, 12)) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Converts Date object into TuiTime
   * @param date
   */
  static fromLocalNativeDate(date) {
    return new _TuiTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  }
  static parseMeridiemPeriod(time) {
    return /[AP]M/.exec(time.toUpperCase().replaceAll(/\W/g, ""))?.[0] || null;
  }
  static parseHours(time) {
    const hours = Number(time.slice(0, 2));
    const meridiem = this.parseMeridiemPeriod(time);
    if (!meridiem) {
      return hours;
    }
    if (hours === 12) {
      return meridiem === "AM" ? 0 : 12;
    }
    return meridiem === "PM" ? hours + 12 : hours;
  }
  /**
   * Shifts time by hours and minutes
   */
  shift({ hours = 0, minutes = 0, seconds = 0, ms = 0 }) {
    const totalMs = this.toAbsoluteMilliseconds() + hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND + ms;
    const totalSeconds = Math.floor(totalMs / MILLISECONDS_IN_SECOND);
    const totalMinutes = Math.floor(totalSeconds / SECONDS_IN_MINUTE);
    const totalHours = Math.floor(totalMinutes / MINUTES_IN_HOUR);
    return new _TuiTime(this.normalizeToRange(totalHours, HOURS_IN_DAY), this.normalizeToRange(totalMinutes, MINUTES_IN_HOUR), this.normalizeToRange(totalSeconds, SECONDS_IN_MINUTE), this.normalizeToRange(totalMs, MILLISECONDS_IN_SECOND));
  }
  /**
   * Converts TuiTime to string
   */
  toString(mode) {
    const needAddMs = mode?.startsWith("HH:MM:SS.MSS") || !mode && this.ms > 0;
    const needAddSeconds = needAddMs || mode?.startsWith("HH:MM:SS") || !mode && this.seconds > 0;
    const { hours = this.hours, meridiem = "" } = mode?.includes("AA") ? this.toTwelveHour(this.hours) : {};
    const hhMm = `${this.formatTime(hours)}:${this.formatTime(this.minutes)}`;
    const ss = needAddSeconds ? `:${this.formatTime(this.seconds)}` : "";
    const mss = needAddMs ? `.${this.formatTime(this.ms, 3)}` : "";
    const aa = meridiem && `${CHAR_NO_BREAK_SPACE}${meridiem}`;
    return `${hhMm}${ss}${mss}${aa}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  /**
   * Converts TuiTime to milliseconds
   */
  toAbsoluteMilliseconds() {
    return this.hours * MILLISECONDS_IN_HOUR + this.minutes * MILLISECONDS_IN_MINUTE + this.seconds * 1e3 + this.ms;
  }
  formatTime(time, digits = 2) {
    return String(time).padStart(digits, "0");
  }
  toTwelveHour(hours) {
    const meridiem = hours >= 12 ? "PM" : "AM";
    return hours === 0 || hours === 12 ? { meridiem, hours: 12 } : { meridiem, hours: hours % 12 };
  }
  normalizeToRange(value, modulus) {
    return (value % modulus + modulus) % modulus;
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static {
    this.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMapperPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMapper",
      type: _TuiMapperPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      name: "tuiMapper"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
  static {
    this.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHoveredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHoveredService,
      factory: _TuiHoveredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], () => [], null);
})();
var TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = outputFromObservable(inject(TuiHoveredService));
  }
  static {
    this.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHovered)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHovered,
      selectors: [["", "tuiHoveredChange", ""]],
      outputs: {
        tuiHoveredChange: "tuiHoveredChange"
      },
      features: [ɵɵProvidersFeature([TuiHoveredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-calendar.mjs
var _c02 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function TuiCalendarSheet_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵproperty("textContent", day_r1);
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
  if (rf & 2) {
    const markers_r5 = ɵɵnextContext();
    ɵɵstyleProp("background", (markers_r5 == null ? null : markers_r5[1]) || "");
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "div", 6);
    ɵɵconditionalCreate(2, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Conditional_2_Template, 1, 2, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const markers_r5 = ctx;
    ɵɵadvance();
    ɵɵstyleProp("background", markers_r5 == null ? null : markers_r5[0]);
    ɵɵadvance();
    ɵɵconditional(markers_r5.length > 1 ? 2 : -1);
  }
}
function TuiCalendarSheet_For_9_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵpipe(1, "tuiMapper");
    ɵɵlistener("click", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      ɵɵnextContext();
      const item_r3 = ɵɵreadContextLet(0);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.dayClick.emit(item_r3));
    })("tuiHoveredChange", function TuiCalendarSheet_For_9_For_3_Conditional_1_Template_div_tuiHoveredChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      ɵɵnextContext();
      const item_r3 = ɵɵreadContextLet(0);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onItemHovered($event && item_r3));
    });
    ɵɵtext(2);
    ɵɵconditionalCreate(3, TuiCalendarSheet_For_9_For_3_Conditional_1_Conditional_3_Template, 3, 3, "div", 5);
    ɵɵpipe(4, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_30_0;
    ɵɵnextContext();
    const item_r3 = ɵɵreadContextLet(0);
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("t-cell_disabled", ctx_r3.disabledItemHandler()(item_r3))("t-cell_today", ctx_r3.itemIsToday(item_r3))("t-cell_unavailable", ctx_r3.itemIsUnavailable(item_r3));
    ɵɵattribute("data-range", ctx_r3.getItemRange(item_r3))("data-type", ɵɵpipeBind2(1, 10, item_r3, ctx_r3.dayType));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r3.day, " ");
    ɵɵadvance();
    ɵɵconditional((tmp_30_0 = ɵɵpipeBindV(4, 13, ɵɵpureFunction5(19, _c02, item_r3, ctx_r3.toMarkers, ctx_r3.itemIsToday(item_r3), ctx_r3.getItemRange(item_r3), ctx_r3.markerHandler()))) ? 3 : -1, tmp_30_0);
  }
}
function TuiCalendarSheet_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵconditionalCreate(1, TuiCalendarSheet_For_9_For_3_Conditional_1_Template, 5, 25, "div", 3);
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    ɵɵnextContext();
    const rowIndex_r7 = ɵɵreadContextLet(0);
    const ctx_r3 = ɵɵnextContext();
    const sheet_r8 = ɵɵreadContextLet(5);
    const item_r9 = ɵɵstoreLet(sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7][$index_r6]);
    ɵɵadvance();
    ɵɵconditional(item_r9 && (!ctx_r3.itemIsUnavailable(item_r9) || ctx_r3.showAdjacent()) ? 1 : -1);
  }
}
function TuiCalendarSheet_For_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵrepeaterCreate(2, TuiCalendarSheet_For_9_For_3_Template, 2, 2, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r10 = ctx.$index;
    ɵɵnextContext();
    const sheet_r8 = ɵɵreadContextLet(5);
    const rowIndex_r11 = ɵɵstoreLet($index_r10);
    ɵɵadvance(2);
    ɵɵrepeater("-".repeat((sheet_r8[rowIndex_r11] == null ? null : sheet_r8[rowIndex_r11].length) ?? 0));
  }
}
function TuiCalendarSpin_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.value().formattedYear, " ");
  }
}
function TuiCalendarSpin_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function TuiCalendarSpin_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.yearClick.emit(ctx_r0.value()));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.value().formattedYear, " ");
  }
}
function TuiCalendarYear_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("click", function TuiCalendarYear_For_1_For_3_Template_div_click_1_listener() {
      ɵɵrestoreView(_r1);
      const item_r2 = ɵɵreadContextLet(0);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.yearClick.emit(item_r2));
    })("tuiHoveredChange", function TuiCalendarYear_For_1_For_3_Template_div_tuiHoveredChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const item_r2 = ɵɵreadContextLet(0);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemHovered($event, item_r2));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    ɵɵnextContext();
    const rowIndex_r5 = ɵɵreadContextLet(0);
    const ctx_r2 = ɵɵnextContext();
    const item_r6 = ɵɵstoreLet(ctx_r2.getItem(rowIndex_r5, $index_r4));
    ɵɵadvance();
    ɵɵclassProp("t-cell_disabled", ctx_r2.isDisabled(item_r6))("t-cell_today", ctx_r2.itemIsToday(item_r6));
    ɵɵproperty("tuiScrollIntoView", ctx_r2.scrollItemIntoView(item_r6));
    ɵɵattribute("data-range", ctx_r2.getItemRange(item_r6));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r6, " ");
  }
}
function TuiCalendarYear_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵelementStart(1, "div", 0);
    ɵɵrepeaterCreate(2, TuiCalendarYear_For_1_For_3_Template, 3, 8, "div", 1, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r7 = ctx.$index;
    ɵɵstoreLet($index_r7);
    ɵɵadvance(2);
    ɵɵrepeater("-".repeat(4));
  }
}
function TuiCalendar_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 0)(1, "tui-calendar-year", 1);
    ɵɵlistener("yearClick", function TuiCalendar_Conditional_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.month().year)("max", ctx_r1.max().year)("min", ctx_r1.min().year)("rangeMode", ctx_r1.options.rangeMode)("value", ctx_r1.value());
  }
}
function TuiCalendar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-spin", 2);
    ɵɵlistener("valueChange", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationValueChange($event));
    })("yearClick", function TuiCalendar_Conditional_1_Template_tui_calendar_spin_yearClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.view.set("year"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-calendar-sheet", 3);
    ɵɵpipe(2, "tuiMapper");
    ɵɵlistener("dayClick", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_dayClick_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDayClick($event));
    })("hoveredItemChange", function TuiCalendar_Conditional_1_Template_tui_calendar_sheet_hoveredItemChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHoveredItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.computedMaxViewedMonth())("min", ctx_r1.computedMinViewedMonth())("value", ctx_r1.month());
    ɵɵadvance();
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler(), ctx_r1.disabledItemHandlerMapper, ctx_r1.min(), ctx_r1.max()))("hoveredItem", ctx_r1.hoveredItem())("markerHandler", ctx_r1.markerHandler())("month", ctx_r1.month())("showAdjacent", ctx_r1.showAdjacent())("value", ctx_r1.value());
  }
}
var TUI_CALENDAR_DEFAULT_OPTIONS = {
  dayType: (day) => day.isWeekend ? "weekend" : "weekday",
  weekStart: signal(TuiDayOfWeek.Monday)
};
var [TUI_CALENDAR_OPTIONS, tuiCalendarOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_DEFAULT_OPTIONS);
var TUI_CALENDAR_SHEET_DEFAULT_OPTIONS = {
  rangeMode: false
};
var [TUI_CALENDAR_SHEET_OPTIONS, tuiCalendarSheetOptionsProvider] = tuiCreateOptions(TUI_CALENDAR_SHEET_DEFAULT_OPTIONS);
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class _TuiCalendarSheetPipe {
  constructor() {
    this.options = inject(TUI_CALENDAR_OPTIONS);
    this.currentMonth = null;
    this.currentSheet = [];
  }
  transform(month, showAdjacentDays = false) {
    if (this.currentMonth?.monthSame(month)) {
      return this.currentSheet;
    }
    const sheet = [];
    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.options.weekStart()
        });
        const isPrevMonthDay = (day2, relativeToMonth = month) => day2.year < relativeToMonth.year || day2.month < relativeToMonth.month;
        const isNextMonthDay = (day2, relativeToMonth = month) => day2.year > relativeToMonth.year || day2.month > relativeToMonth.month;
        if (isPrevMonthDay(day) && !showAdjacentDays) {
          continue;
        }
        if (isNextMonthDay(day) && !showAdjacentDays) {
          break;
        }
        row.push(day);
      }
      sheet.push(row);
    }
    this.currentSheet = sheet.filter((row) => row.length);
    this.currentMonth = month;
    return this.currentSheet;
  }
  static {
    this.ɵfac = function TuiCalendarSheetPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheetPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiCalendarSheet",
      type: _TuiCalendarSheetPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
    type: Pipe,
    args: [{
      name: "tuiCalendarSheet"
    }]
  }], null, null);
})();
function getMonthStartDaysOffset(month, firstDayOfWeek) {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
}
function getDayFromMonthRowCol({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) {
  ngDevMode && console.assert(Number.isInteger(rowIndex));
  ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
  ngDevMode && console.assert(Number.isInteger(colIndex));
  ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
  let day = rowIndex * DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new TuiDay(month.year, month.month, day);
}
function convertToSundayFirstWeekFormat(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex] || "", ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class _TuiOrderWeekDaysPipe {
  constructor() {
    this.options = inject(TUI_CALENDAR_OPTIONS);
  }
  transform(mondayFirstWeekDays$) {
    return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [...weekDays.slice(this.options.weekStart()), ...weekDays.slice(0, this.options.weekStart())]));
  }
  static {
    this.ɵfac = function TuiOrderWeekDaysPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOrderWeekDaysPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiOrderWeekDays",
      type: _TuiOrderWeekDaysPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
    type: Pipe,
    args: [{
      name: "tuiOrderWeekDays"
    }]
  }], null, null);
})();
var TuiCalendarSheet = class _TuiCalendarSheet {
  constructor() {
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.today = TuiDay.currentLocal();
    this.unorderedWeekDays$ = toObservable(inject(TUI_SHORT_WEEK_DAYS));
    this.dayType = inject(TUI_CALENDAR_OPTIONS).dayType;
    this.month = input(TuiMonth.currentLocal());
    this.disabledItemHandler = input(TUI_FALSE_HANDLER);
    this.markerHandler = input(null);
    this.value = input(null);
    this.showAdjacent = input(true);
    this.hoveredItem = model(null);
    this.dayClick = output();
    this.toMarkers = (day, today, range, markerHandler) => {
      if (today || ["active", "end", "start"].includes(range || "")) {
        return null;
      }
      const markers = markerHandler?.(day);
      return markers?.length ? markers : null;
    };
  }
  onItemHovered(item) {
    this.updateHoveredItem(item || null);
  }
  getItemRange(item) {
    const value = this.value();
    if (!value) {
      return null;
    }
    if (value instanceof TuiDay && !this.computedRangeMode) {
      return value.daySame(item) ? "active" : null;
    }
    if (value instanceof TuiDayRange && value.isSingleDay) {
      return value.from.daySame(item) ? "active" : null;
    }
    if (!(value instanceof TuiDay) && !(value instanceof TuiDayRange)) {
      return value.find((day) => day.daySame(item)) ? "active" : null;
    }
    const range = this.getRange(value, this.hoveredItem());
    if (range.isSingleDay && range.from.daySame(item)) {
      return "active";
    }
    if (range.from.daySame(item)) {
      return "start";
    }
    if (range.to.daySame(item)) {
      return "end";
    }
    return range.from.dayBefore(item) && range.to.dayAfter(item) ? "middle" : null;
  }
  get computedRangeMode() {
    return this.options.rangeMode;
  }
  get isRangePicking() {
    return this.options.rangeMode && this.value() instanceof TuiDay;
  }
  itemIsToday(item) {
    return this.today.daySame(item);
  }
  itemIsUnavailable(item) {
    return !this.month().monthSame(item);
  }
  getRange(value, hoveredItem) {
    if (value instanceof TuiDay) {
      return TuiDayRange.sort(value, hoveredItem ?? value);
    }
    return value.isSingleDay ? TuiDayRange.sort(value.from, hoveredItem ?? value.to) : value;
  }
  updateHoveredItem(day) {
    if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem.set(day);
  }
  static {
    this.ɵfac = function TuiCalendarSheet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSheet,
      selectors: [["tui-calendar-sheet"]],
      hostVars: 2,
      hostBindings: function TuiCalendarSheet_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking);
        }
      },
      inputs: {
        month: [1, "month"],
        disabledItemHandler: [1, "disabledItemHandler"],
        markerHandler: [1, "markerHandler"],
        value: [1, "value"],
        showAdjacent: [1, "showAdjacent"],
        hoveredItem: [1, "hoveredItem"]
      },
      outputs: {
        hoveredItem: "hoveredItemChange",
        dayClick: "dayClick"
      },
      decls: 10,
      vars: 8,
      consts: [[1, "t-row", "t-row_weekday"], [1, "t-cell", 3, "textContent"], ["automation-id", "tui-calendar-sheet__row", 1, "t-row"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "t-cell_disabled", "t-cell_today", "t-cell_unavailable"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "click", "tuiHoveredChange"], [1, "t-dots"], [1, "t-dot"], [1, "t-dot", 3, "background"]],
      template: function TuiCalendarSheet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, TuiCalendarSheet_For_2_Template, 1, 1, "div", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵpipe(3, "tuiOrderWeekDays");
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
          ɵɵdeclareLet(5);
          ɵɵpipe(6, "tuiCalendarSheet");
          ɵɵelementStart(7, "div");
          ɵɵrepeaterCreate(8, TuiCalendarSheet_For_9_Template, 4, 1, "div", 2, ɵɵrepeaterTrackByIndex);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵrepeater(ɵɵpipeBind1(4, 2, ɵɵpipeBind1(3, 0, ctx.unorderedWeekDays$)));
          ɵɵadvance(4);
          const sheet_r12 = ɵɵstoreLet(ɵɵpipeBind2(6, 4, ctx.month(), true));
          ɵɵadvance(3);
          ɵɵrepeater("-".repeat(sheet_r12.length));
        }
      },
      dependencies: [AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiMapperPipe, TuiOrderWeekDaysPipe],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell[_ngcontent-%COMP%]{inline-size:calc(100% / 7)}[data-type=weekday][_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-type=weekend][_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}`],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheet, [{
    type: Component,
    args: [{
      selector: "tui-calendar-sheet",
      imports: [AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiMapperPipe, TuiOrderWeekDaysPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isRangePicking"
      },
      template: `<div class="t-row t-row_weekday">
    @for (day of unorderedWeekDays$ | tuiOrderWeekDays | async; track day) {
        <div
            class="t-cell"
            [textContent]="day"
        ></div>
    }
</div>
@let sheet = month() | tuiCalendarSheet: true;
<div>
    @for (_ of '-'.repeat(sheet.length); track $index) {
        @let rowIndex = $index;
        <div
            automation-id="tui-calendar-sheet__row"
            class="t-row"
        >
            @for (_ of '-'.repeat(sheet[rowIndex]?.length ?? 0); track $index) {
                @let item = sheet[rowIndex]?.[$index];
                @if (item && (!itemIsUnavailable(item) || showAdjacent())) {
                    <div
                        automation-id="tui-calendar-sheet__cell"
                        class="t-cell"
                        [attr.data-range]="getItemRange(item)"
                        [attr.data-type]="item | tuiMapper: dayType"
                        [class.t-cell_disabled]="disabledItemHandler()(item)"
                        [class.t-cell_today]="itemIsToday(item)"
                        [class.t-cell_unavailable]="itemIsUnavailable(item)"
                        (click)="dayClick.emit(item)"
                        (tuiHoveredChange)="onItemHovered($event && item)"
                    >
                        {{ item.day }}
                        @if (
                            item | tuiMapper: toMarkers : itemIsToday(item) : getItemRange(item) : markerHandler();
                            as markers
                        ) {
                            <div class="t-dots">
                                <div
                                    class="t-dot"
                                    [style.background]="markers?.[0]"
                                ></div>
                                @if (markers.length > 1) {
                                    <div
                                        class="t-dot"
                                        [style.background]="markers?.[1] || ''"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                }
            }
        </div>
    }
</div>
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:calc(100% / 7)}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-typography-body-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;display:flex;inset-block-end:0;justify-content:center;margin-block-start:-.5rem;padding-block-end:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}
`]
    }]
  }], null, null);
})();
var TuiCalendarSpin = class _TuiCalendarSpin {
  constructor() {
    this.months = inject(TUI_MONTHS);
    this.value = model(TuiMonth.currentLocal());
    this.min = input(TUI_FIRST_DAY);
    this.max = input(TUI_LAST_DAY);
    this.yearClick = output();
  }
  append(date) {
    const value = this.value().append(date);
    const min = this.min();
    const max = this.max();
    if (min.monthSameOrAfter(value)) {
      this.updateValue(min);
    } else {
      this.updateValue(max.monthSameOrBefore(value) ? max : value);
    }
  }
  updateValue(value) {
    if (this.value().monthSame(value)) {
      return;
    }
    this.value.set(value);
  }
  static {
    this.ɵfac = function TuiCalendarSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSpin)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSpin,
      selectors: [["tui-calendar-spin"]],
      inputs: {
        value: [1, "value"],
        min: [1, "min"],
        max: [1, "max"]
      },
      outputs: {
        value: "valueChange",
        yearClick: "yearClick"
      },
      decls: 4,
      vars: 5,
      consts: [[3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], ["tabIndex", "-1", "tuiLink", "", "type", "button"], ["tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiCalendarSpin_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-spin-button", 0);
          ɵɵlistener("leftClick", function TuiCalendarSpin_Template_tui_spin_button_leftClick_0_listener() {
            return ctx.append({
              month: -1
            });
          })("rightClick", function TuiCalendarSpin_Template_tui_spin_button_rightClick_0_listener() {
            return ctx.append({
              month: 1
            });
          });
          ɵɵtext(1);
          ɵɵconditionalCreate(2, TuiCalendarSpin_Conditional_2_Template, 1, 1)(3, TuiCalendarSpin_Conditional_3_Template, 2, 1, "button", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("focusable", false)("leftDisabled", ctx.value().monthSameOrBefore(ctx.min()))("rightDisabled", ctx.value().monthSameOrAfter(ctx.max()));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.months()[ctx.value().month], " ");
          ɵɵadvance();
          ɵɵconditional(ctx.min().year === ctx.max().year ? 2 : 3);
        }
      },
      dependencies: [TuiLink, TuiSpinButton],
      styles: ["[_nghost-%COMP%]{display:block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSpin, [{
    type: Component,
    args: [{
      selector: "tui-calendar-spin",
      imports: [TuiLink, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-spin-button\n    [focusable]="false"\n    [leftDisabled]="value().monthSameOrBefore(min())"\n    [rightDisabled]="value().monthSameOrAfter(max())"\n    (leftClick)="append({month: -1})"\n    (rightClick)="append({month: 1})"\n>\n    {{ months()[value().month] }}\n    @if (min().year === max().year) {\n        {{ value().formattedYear }}\n    } @else {\n        <button\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="yearClick.emit(value())"\n        >\n            {{ value().formattedYear }}\n        </button>\n    }\n</tui-spin-button>\n',
      styles: [":host{display:block}\n"]
    }]
  }], null, null);
})();
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var CURRENT_YEAR = TuiMonth.currentLocal().year;
var TuiCalendarYear = class _TuiCalendarYear {
  constructor() {
    this.hoveredItem = signal(null);
    this.calculatedMin = computed(() => {
      const initial = this.initialItem() - LIMIT;
      const min = this.min() ?? MIN_YEAR;
      return min > initial ? min : initial;
    });
    this.calculatedMax = computed(() => {
      const initial = this.initialItem() + LIMIT;
      const max = this.max() ?? MAX_YEAR;
      return max < initial ? max + 1 : initial;
    });
    this.isRangePicking = computed((x = this.value()) => this.rangeMode() && (x instanceof TuiDay || x instanceof TuiMonth));
    this.rows = computed(() => Math.ceil((this.calculatedMax() - this.calculatedMin()) / ITEMS_IN_ROW));
    this.rangeMode = input(false);
    this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
    this.value = input(null);
    this.min = input(MIN_YEAR, {
      transform: (x) => x ?? MIN_YEAR
    });
    this.max = input(MAX_YEAR, {
      transform: (x) => x ?? MAX_YEAR
    });
    this.initialItem = input(CURRENT_YEAR, {
      transform: (x) => x ?? CURRENT_YEAR
    });
    this.yearClick = output();
  }
  isDisabled(item) {
    return this.max() && this.max() < item || this.min() && this.min() > item || this.disabledItemHandler()(item);
  }
  getItemRange(item) {
    const value = this.value();
    const hoveredItem = this.hoveredItem();
    if (value instanceof TuiYear && value.year === item) {
      return "active";
    }
    if (tuiIsNumber(value)) {
      return value === item ? "active" : null;
    }
    if (!(value instanceof TuiMonthRange) && !(value instanceof TuiYear)) {
      return value?.find((day) => day.year === item) ? "active" : null;
    }
    const hovered = this.isRangePicking() ? hoveredItem : null;
    const from = "from" in value ? value.from?.year : value.year;
    const to = "from" in value ? value.to.year : value.year;
    const min = Math.min(from, hovered ?? to);
    const max = Math.max(from, hovered ?? to);
    if (min === max && from === to && from === item) {
      return "active";
    }
    if (min === item) {
      return "start";
    }
    if (max === item) {
      return "end";
    }
    return min < item && item < max ? "middle" : null;
  }
  onItemHovered(hovered, item) {
    this.hoveredItem.set(hovered ? item : null);
  }
  scrollItemIntoView(item) {
    return this.initialItem() === item;
  }
  getItem(rowIndex, colIndex) {
    return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin();
  }
  itemIsToday(item) {
    return CURRENT_YEAR === item;
  }
  static {
    this.ɵfac = function TuiCalendarYear_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarYear)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarYear,
      selectors: [["tui-calendar-year"]],
      hostVars: 2,
      hostBindings: function TuiCalendarYear_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isRangePicking());
        }
      },
      inputs: {
        rangeMode: [1, "rangeMode"],
        disabledItemHandler: [1, "disabledItemHandler"],
        value: [1, "value"],
        min: [1, "min"],
        max: [1, "max"],
        initialItem: [1, "initialItem"]
      },
      outputs: {
        yearClick: "yearClick"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendarYear)])],
      decls: 2,
      vars: 0,
      consts: [["automation-id", "tui-calendar-year__row", 1, "t-row"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "t-cell_disabled", "t-cell_today", "tuiScrollIntoView"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiScrollIntoView"]],
      template: function TuiCalendarYear_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, TuiCalendarYear_For_1_Template, 4, 1, "div", 0, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater("-".repeat(ctx.rows()));
        }
      },
      dependencies: [TuiHovered, TuiScrollIntoView],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell[_ngcontent-%COMP%]{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}`],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarYear, [{
    type: Component,
    args: [{
      selector: "tui-calendar-year",
      imports: [TuiHovered, TuiScrollIntoView],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendarYear)],
      host: {
        "[class._picking]": "isRangePicking()"
      },
      template: `@for (_ of '-'.repeat(rows()); track $index) {
    @let rowIndex = $index;
    <div
        automation-id="tui-calendar-year__row"
        class="t-row"
    >
        @for (_ of '-'.repeat(4); track $index) {
            @let item = getItem(rowIndex, $index);
            <div
                automation-id="tui-calendar-year__cell"
                class="t-cell"
                [attr.data-range]="getItemRange(item)"
                [class.t-cell_disabled]="isDisabled(item)"
                [class.t-cell_today]="itemIsToday(item)"
                [tuiScrollIntoView]="scrollItemIntoView(item)"
                (click)="yearClick.emit(item)"
                (tuiHoveredChange)="onItemHovered($event, item)"
            >
                {{ item }}
            </div>
        }
    </div>
}
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-typography-body-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask-image:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>'),linear-gradient(#000,#000);-webkit-mask-position:right,left;mask-position:right,left;-webkit-mask-size:.75rem 100%,calc(100% - .7rem) 100%;mask-size:.75rem 100%,calc(100% - .7rem) 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-top-left-radius:0;border-bottom-left-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-top-right-radius:0;border-bottom-right-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{inset-inline-end:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{inset-inline-start:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask-image:none;mask-image:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;padding-inline-end:1rem;inline-size:15.75rem;padding:0 1.125rem}.t-cell{flex:1;border-block-start-width:.5rem;border-block-end-width:.5rem}
`]
    }]
  }], null, null);
})();
var TuiCalendar = class _TuiCalendar {
  constructor() {
    this.options = inject(TUI_CALENDAR_SHEET_OPTIONS);
    this.disabledItemHandler = input(inject(TUI_ITEMS_HANDLERS).disabledItemHandler());
    this.min = input(TUI_FIRST_DAY, {
      transform: (x) => x ?? TUI_FIRST_DAY
    });
    this.max = input(TUI_LAST_DAY, {
      transform: (x) => x ?? TUI_LAST_DAY
    });
    this.minViewedMonth = input(TUI_FIRST_DAY);
    this.maxViewedMonth = input(TUI_LAST_DAY);
    this.showAdjacent = input(true);
    this.markerHandler = input(null);
    this.initialView = input("month");
    this.month = model(TuiMonth.currentLocal());
    this.hoveredItem = model(null);
    this.value = model(null);
    this.dayClick = output();
    this.computedMinViewedMonth = computed(() => {
      const min = this.min();
      const minViewed = this.minViewedMonth() ?? TUI_FIRST_DAY;
      return minViewed.monthSameOrAfter(min) ? minViewed : min;
    });
    this.computedMaxViewedMonth = computed(() => {
      const max = this.max();
      const maxViewed = this.maxViewedMonth() ?? TUI_LAST_DAY;
      return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    });
    this.view = linkedSignal(() => this.initialView());
    this.syncMonthFromValue = effect(() => {
      const value = this.value();
      if (this.showAdjacent() && value instanceof TuiDay && value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) {
        this.month.set(value);
      }
    });
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
  }
  onPaginationValueChange(month) {
    this.updateViewedMonth(month);
  }
  onDayClick(day) {
    this.dayClick.emit(day);
    this.value.set(day);
  }
  onHoveredItemChange(day) {
    this.updateHoveredDay(day);
  }
  onPickerYearClick(year) {
    this.view.set("month");
    this.updateViewedMonth(new TuiMonth(year, this.month().month));
  }
  updateViewedMonth(month) {
    if (this.month().monthSame(month)) {
      return;
    }
    this.month.set(month);
  }
  updateHoveredDay(day) {
    if (tuiNullableSame(this.hoveredItem(), day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem.set(day);
  }
  static {
    this.ɵfac = function TuiCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendar,
      selectors: [["tui-calendar"]],
      hostBindings: function TuiCalendar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.prevent.zoneless", function TuiCalendar_pointerdown_prevent_zoneless_HostBindingHandler() {
            return 0;
          });
        }
      },
      inputs: {
        disabledItemHandler: [1, "disabledItemHandler"],
        min: [1, "min"],
        max: [1, "max"],
        minViewedMonth: [1, "minViewedMonth"],
        maxViewedMonth: [1, "maxViewedMonth"],
        showAdjacent: [1, "showAdjacent"],
        markerHandler: [1, "markerHandler"],
        initialView: [1, "initialView"],
        month: [1, "month"],
        hoveredItem: [1, "hoveredItem"],
        value: [1, "value"]
      },
      outputs: {
        month: "monthChange",
        hoveredItem: "hoveredItemChange",
        value: "valueChange",
        dayClick: "dayClick"
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiCalendar)])],
      decls: 2,
      vars: 1,
      consts: [["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "yearClick", "initialItem", "max", "min", "rangeMode", "value"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "valueChange", "yearClick", "max", "min", "value"], ["automation-id", "tui-calendar__calendar", 3, "dayClick", "hoveredItemChange", "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value"]],
      template: function TuiCalendar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiCalendar_Conditional_0_Template, 2, 5, "tui-scrollbar", 0)(1, TuiCalendar_Conditional_1_Template, 3, 14);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.view() === "year" ? 0 : 1);
        }
      },
      dependencies: [TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}tui-sheet-dialog[_nghost-%COMP%], tui-sheet-dialog   [_nghost-%COMP%]{inline-size:100%}tui-calendar-year[_ngcontent-%COMP%]{padding:0}.t-scrollbar[_ngcontent-%COMP%]{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination[_ngcontent-%COMP%]{margin-block-end:1rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendar, [{
    type: Component,
    args: [{
      selector: "tui-calendar",
      imports: [TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiCalendar)],
      host: {
        "(pointerdown.prevent.zoneless)": "0"
      },
      template: `@if (view() === 'year') {
    <tui-scrollbar
        automation-id="tui-calendar__scrollbar"
        class="t-scrollbar"
    >
        <tui-calendar-year
            automation-id="tui-calendar__year"
            [initialItem]="month().year"
            [max]="max().year"
            [min]="min().year"
            [rangeMode]="options.rangeMode"
            [value]="value()"
            (yearClick)="onPickerYearClick($event)"
        />
    </tui-scrollbar>
} @else {
    <tui-calendar-spin
        automation-id="tui-calendar__pagination"
        class="t-pagination"
        [max]="computedMaxViewedMonth()"
        [min]="computedMinViewedMonth()"
        [value]="month()"
        (valueChange)="onPaginationValueChange($event)"
        (yearClick)="view.set('year')"
    />
    <tui-calendar-sheet
        automation-id="tui-calendar__calendar"
        [disabledItemHandler]="disabledItemHandler() | tuiMapper: disabledItemHandlerMapper : min() : max()"
        [hoveredItem]="hoveredItem()"
        [markerHandler]="markerHandler()"
        [month]="month()"
        [showAdjacent]="showAdjacent()"
        [value]="value()"
        (dayClick)="onDayClick($event)"
        (hoveredItemChange)="onHoveredItemChange($event)"
    />
}
`,
      styles: [":host{display:block;min-block-size:20.25rem;inline-size:18rem;padding:1rem 1.125rem;box-sizing:border-box;flex-shrink:0}:host-context(tui-sheet-dialog){inline-size:100%}tui-calendar-year{padding:0}.t-scrollbar{block-size:18.25rem;inline-size:calc(100% + 1rem)}.t-pagination{margin-block-end:1rem}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.el = tuiInjectElement();
    this.control$ = new BehaviorSubject(null);
    this.sub = this.control$.pipe(switchMap((control) => control?.events || of(null)), delay(0), tuiZonefree(), tuiTakeUntilDestroyed()).subscribe(() => this.handleValidation());
    this.tuiNativeValidator = input("Invalid");
  }
  validate(control) {
    this.control$.next(control);
    return null;
  }
  handleValidation() {
    const invalid = !!this.control$.value?.touched && this.control$.value?.invalid;
    this.el.closest("tui-textfield")?.classList.toggle("tui-invalid", invalid);
    this.el.setCustomValidity?.(invalid ? this.tuiNativeValidator() : "");
  }
  static {
    this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeValidator,
      selectors: [["", "tuiNativeValidator", ""]],
      hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
            return ctx.handleValidation();
          });
        }
      },
      inputs: {
        tuiNativeValidator: [1, "tuiNativeValidator"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-radio.mjs
var _c03 = ["type", "radio", "tuiRadio", ""];
var [TUI_RADIO_OPTIONS, tuiRadioOptionsProvider] = tuiCreateOptions({
  size: "m",
  appearance: ({
    checked
  }) => checked ? "primary" : "outline-grayscale"
});
var TuiRadioComponent = class _TuiRadioComponent {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.options = inject(TUI_RADIO_OPTIONS);
    this.appearance = tuiAppearance(this.options.appearance(this.el));
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = input(this.options.size);
  }
  ngOnInit() {
    tuiControlValue(this.control).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      const fix = this.control instanceof NgModel && value == null ? this.control.model : value;
      this.el.indeterminate = fix == null && this.el.matches("[tuiCheckbox]");
      this.ngDoCheck();
    });
  }
  ngDoCheck() {
    this.appearance.set(this.options.appearance(this.el));
  }
  static {
    this.ɵfac = function TuiRadioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRadioComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRadioComponent,
      selectors: [["input", "type", "radio", "tuiRadio", ""]],
      hostVars: 4,
      hostBindings: function TuiRadioComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size());
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: [1, "size"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }, TuiNativeValidator])],
      attrs: _c03,
      decls: 0,
      vars: 0,
      template: function TuiRadioComponent_Template(rf, ctx) {
      },
      styles: ['[tuiRadio]:where(*[data-tui-version="5.6.0"]){--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:where(*[data-tui-version="5.6.0"]):disabled._readonly._readonly{opacity:1}[tuiRadio]:where(*[data-tui-version="5.6.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:where(*[data-tui-version="5.6.0"]):checked:before{transform:scale(.5)}[tuiRadio]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-size: 1rem}[tuiRadio]:where(*[data-tui-version="5.6.0"]):invalid:not([data-mode]),[tuiRadio]:where(*[data-tui-version="5.6.0"])[data-mode~=invalid]{color:#fff}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioComponent, [{
    type: Component,
    args: [{
      selector: 'input[type="radio"][tuiRadio]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }, TuiNativeValidator],
      host: {
        "[attr.data-size]": "size()",
        "[class._readonly]": "!control",
        "[disabled]": "!control || control.disabled"
      },
      styles: ['[tuiRadio]:where(*[data-tui-version="5.6.0"]){--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:where(*[data-tui-version="5.6.0"]):disabled._readonly._readonly{opacity:1}[tuiRadio]:where(*[data-tui-version="5.6.0"]):before{position:absolute;inset-block-start:0;inset-inline-start:0;inset-block-end:0;inset-inline-end:0;content:"";margin:auto;border-radius:100%;background:currentColor;transform:scale(0);transition-property:transform}[tuiRadio]:where(*[data-tui-version="5.6.0"]):checked:before{transform:scale(.5)}[tuiRadio]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-size: 1rem}[tuiRadio]:where(*[data-tui-version="5.6.0"]):invalid:not([data-mode]),[tuiRadio]:where(*[data-tui-version="5.6.0"])[data-mode~=invalid]{color:#fff}\n']
    }]
  }], null, null);
})();
var TuiRadioDirective = class _TuiRadioDirective {
  constructor() {
    this.identityMatcher = input(TUI_DEFAULT_IDENTITY_MATCHER);
    const accessor = inject(RadioControlValueAccessor);
    const writeValue = accessor.writeValue.bind(accessor);
    accessor.writeValue = (value) => {
      if (this.identityMatcher()(value, accessor.value)) {
        writeValue(accessor.value);
      } else {
        writeValue(value);
      }
    };
  }
  static {
    this.ɵfac = function TuiRadioDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRadioDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRadioDirective,
      selectors: [["input", "type", "radio", "tuiRadio", "", "identityMatcher", ""]],
      inputs: {
        identityMatcher: [1, "identityMatcher"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioDirective, [{
    type: Directive,
    args: [{
      selector: 'input[type="radio"][tuiRadio][identityMatcher]'
    }]
  }], () => [], null);
})();
var TuiRadio = [TuiRadioComponent, TuiRadioDirective];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-checkbox.mjs
var _c04 = ["type", "checkbox", "tuiCheckbox", ""];
var [TUI_CHECKBOX_OPTIONS, tuiCheckboxOptionsProvider] = tuiCreateOptions({
  size: "m",
  appearance: (el) => el.checked || el.indeterminate ? "primary" : "outline-grayscale",
  icons: {
    checked: () => "@tui.check",
    indeterminate: () => "@tui.minus"
  }
});
var TuiCheckbox = class _TuiCheckbox extends TuiRadioComponent {
  constructor() {
    super(...arguments);
    this.check = tuiIconStart(computed(() => this.options.icons.checked(this.size())));
    this.indeterminate = tuiIconEnd(computed(() => this.options.icons.indeterminate(this.size())));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiCheckbox_BaseFactory;
      return function TuiCheckbox_Factory(__ngFactoryType__) {
        return (ɵTuiCheckbox_BaseFactory || (ɵTuiCheckbox_BaseFactory = ɵɵgetInheritedFactory(_TuiCheckbox)))(__ngFactoryType__ || _TuiCheckbox);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCheckbox,
      selectors: [["input", "type", "checkbox", "tuiCheckbox", ""]],
      features: [ɵɵProvidersFeature([tuiProvide(TUI_RADIO_OPTIONS, TUI_CHECKBOX_OPTIONS)]), ɵɵHostDirectivesFeature([TuiIcons]), ɵɵInheritDefinitionFeature],
      attrs: _c04,
      decls: 0,
      vars: 0,
      template: function TuiCheckbox_Template(rf, ctx) {
      },
      styles: [`[tuiCheckbox]:where(*[data-tui-version="5.6.0"]){--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):before{position:absolute;block-size:100%;inline-size:100%;font-size:1rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');transform:scale(0);transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):after{display:none}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):checked:before,[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}[tuiCheckbox]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox]:where(*[data-tui-version="5.6.0"])[data-size=s]:before{font-size:.875rem}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):invalid:not([data-mode]),[tuiCheckbox]:where(*[data-tui-version="5.6.0"])[data-mode~=invalid]{color:#fff}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckbox, [{
    type: Component,
    args: [{
      selector: 'input[type="checkbox"][tuiCheckbox]',
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_CHECKBOX_OPTIONS)],
      hostDirectives: [TuiIcons],
      styles: [`[tuiCheckbox]:where(*[data-tui-version="5.6.0"]){--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):before{position:absolute;block-size:100%;inline-size:100%;font-size:1rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>');transform:scale(0);transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):after{display:none}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):disabled._readonly._readonly{opacity:1;pointer-events:none}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):checked:before,[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-start);mask-image:var(--t-icon-start);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition-duration:inherit}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):indeterminate:before{-webkit-mask-image:var(--t-icon-end);mask-image:var(--t-icon-end)}[tuiCheckbox]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}[tuiCheckbox]:where(*[data-tui-version="5.6.0"])[data-size=s]:before{font-size:.875rem}[tuiCheckbox]:where(*[data-tui-version="5.6.0"]):invalid:not([data-mode]),[tuiCheckbox]:where(*[data-tui-version="5.6.0"])[data-mode~=invalid]{color:#fff}
`]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c05 = ["*"];
function TuiExpand_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content() || null);
  }
}
var TuiExpand = class _TuiExpand {
  constructor() {
    this.content = contentChild(TuiItem, {
      read: TemplateRef
    });
    this.open = signal(false);
    this.expanded = input(false);
  }
  ngOnInit() {
    this.open.set(this.expanded());
  }
  onTransitionEnd({
    propertyName
  }) {
    if (propertyName === "grid-template-rows") {
      this.open.set(this.expanded());
    }
  }
  static {
    this.ɵfac = function TuiExpand_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpand)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiExpand,
      selectors: [["tui-expand"]],
      contentQueries: function TuiExpand_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.content, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostVars: 4,
      hostBindings: function TuiExpand_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("transitionend.self", function TuiExpand_transitionend_self_HostBindingHandler($event) {
            return ctx.onTransitionEnd($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_expanded", ctx.expanded())("_open", ctx.open());
        }
      },
      inputs: {
        expanded: [1, "expanded"]
      },
      ngContentSelectors: _c05,
      decls: 3,
      vars: 1,
      consts: [[1, "t-wrapper"], [3, "ngTemplateOutlet"]],
      template: function TuiExpand_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0);
          ɵɵconditionalCreate(1, TuiExpand_Conditional_1_Template, 1, 1, "ng-container", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.expanded() || ctx.open() ? 1 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}[_nghost-%COMP%]:not(._expanded){padding-block:0}._expanded[_nghost-%COMP%]{visibility:visible;grid-template-rows:1fr}._expanded[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{opacity:1;visibility:visible}._expanded._open[_nghost-%COMP%] > .t-wrapper[_ngcontent-%COMP%]{overflow:visible}.t-wrapper[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpand, [{
    type: Component,
    args: [{
      selector: "tui-expand",
      imports: [NgTemplateOutlet],
      template: `
        <div class="t-wrapper">
            @if (expanded() || open()) {
                <ng-container [ngTemplateOutlet]="content() || null" />
            }
            <ng-content />
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._expanded]": "expanded()",
        "[class._open]": "open()",
        "(transitionend.self)": "onTransitionEnd($event)"
      },
      styles: [":host{transition-property:grid-template-rows,padding;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:grid;grid-template-rows:0fr;transition-delay:1ms}:host:not(._expanded){padding-block:0}:host._expanded{visibility:visible;grid-template-rows:1fr}:host._expanded>.t-wrapper{opacity:1;visibility:visible}:host._expanded._open>.t-wrapper{overflow:visible}.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;grid-row:1 / span 2;overflow:hidden;opacity:0;visibility:hidden}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var TuiIcon = class _TuiIcon {
  constructor() {
    this.icons = inject(TuiIcons);
    this.mask = computed(() => this.icons.resolve(this.background()));
    this.background = input("");
  }
  static {
    this.ɵfac = function TuiIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcon)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIcon,
      selectors: [["tui-icon", 3, "tuiBadge", ""]],
      hostVars: 2,
      hostBindings: function TuiIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon-bg", ctx.mask());
        }
      },
      inputs: {
        background: [1, "background"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "icon", "iconEnd", "badge"]
      }])],
      decls: 0,
      vars: 0,
      template: function TuiIcon_Template(rf, ctx) {
      },
      styles: ['tui-icon:where(*[data-tui-version="5.6.0"]){--tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--t-icon-bg);mask-image:var(--t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--tui-font-offset) - 10px,1px)/.8px)}@media (hover: hover) and (pointer: fine){tui-icon:where(*[data-tui-version="5.6.0"])[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,tui-icon:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end]:before{-webkit-mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-start]:after{transform:translate(36%,36%);--tui-icon-size: .5715em}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end=font]:after{zoom:.667}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      selector: "tui-icon:not([tuiBadge])",
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart: icon", "iconEnd: badge"]
      }],
      host: {
        "[style.--t-icon-bg]": "mask()"
      },
      styles: ['tui-icon:where(*[data-tui-version="5.6.0"]){--tui-icon-size: 1em;position:relative;display:inline-flex;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask-image:var(--t-icon-bg);mask-image:var(--t-icon-bg);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;mask-size:calc(100% + 10 * var(--tui-stroke-width)) 100%;zoom:calc(100%*clamp(0px,var(--tui-font-offset) - 10px,1px)/.8px)}@media (hover: hover) and (pointer: fine){tui-icon:where(*[data-tui-version="5.6.0"])[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,tui-icon:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{zoom:1}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end]:before{-webkit-mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon-start),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);-webkit-mask-composite:source-in;mask-composite:intersect}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end][data-icon-start=img]:before,tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end][data-icon-start=font]:before{-webkit-mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end]:after{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-start]:before{position:absolute;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-start]:after{transform:translate(36%,36%);--tui-icon-size: .5715em}tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-start=font]:before,tui-icon:where(*[data-tui-version="5.6.0"])[data-icon-end=font]:after{zoom:.667}\n']
    }]
  }], null, null);
})();
var TuiIconPipe = class _TuiIconPipe {
  constructor() {
    this.transform = tuiInjectIconResolver();
  }
  static {
    this.ɵfac = function TuiIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiIcon",
      type: _TuiIconPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
    type: Pipe,
    args: [{
      name: "tuiIcon"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-button-x.mjs
var TuiButtonX = class _TuiButtonX {
  static {
    this.ɵfac = function TuiButtonX_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonX)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonX,
      selectors: [["", "tuiButtonX", ""]],
      hostAttrs: ["tabindex", "-1", "tuiIconButton", "", "type", "button"],
      hostVars: 2,
      hostBindings: function TuiButtonX_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.prevent.zoneless", function TuiButtonX_pointerdown_prevent_zoneless_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-radius", 100, "%");
        }
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider((host = inject(TUI_DATA_LIST_HOST, {
        optional: true
      })) => ({
        appearance: host ? "icon" : "neutral",
        size: host ? "xs" : "s"
      })), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiButton,
        inputs: ["size", "size"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonX, [{
    type: Directive,
    args: [{
      selector: "[tuiButtonX]",
      providers: [tuiButtonOptionsProvider((host = inject(TUI_DATA_LIST_HOST, {
        optional: true
      })) => ({
        appearance: host ? "icon" : "neutral",
        size: host ? "xs" : "s"
      })), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }],
      hostDirectives: [{
        directive: TuiButton,
        inputs: ["size"]
      }],
      host: {
        tabindex: "-1",
        tuiIconButton: "",
        type: "button",
        "[style.--t-radius.%]": "100",
        "(pointerdown.prevent.zoneless)": "(0)"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-filter-by-input.mjs
var TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS = {
  filter: (items, search, stringify) => items.find((x) => TUI_STRICT_MATCHER(x, search, stringify)) ? items : items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
};
var [TUI_FILTER_BY_INPUT_OPTIONS, tuiFilterByInputOptionsProvider] = tuiCreateOptions(TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS);
var TuiFilterByInputPipe = class _TuiFilterByInputPipe {
  constructor() {
    this.options = inject(TUI_FILTER_BY_INPUT_OPTIONS);
    this.search = inject(TUI_TEXTFIELD_VALUE);
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.filter = signal(this.options.filter);
    this.filterFlat = computed((filter2 = this.filter(), search = this.search(), stringify = this.handlers.stringify()) => (items) => filter2(items, search, stringify));
    this.items = signal([]);
    this.filtered = computed((items = this.items(), filter2 = this.filterFlat()) => items && (tuiIsFlat(items) ? filter2(items) : this.filter2d(items)));
  }
  transform(items, filter2 = this.options.filter) {
    untracked(() => {
      this.items.set(items);
      this.filter.set(filter2);
    });
    return this.filtered();
  }
  filter2d(groups) {
    const groupMap = new Map(groups.flatMap((group, i) => group.map((item) => [item, i])));
    const filteredGroups = [];
    this.filterFlat()(groups.flat()).forEach((item) => {
      const i = groupMap.get(item);
      filteredGroups[i] = filteredGroups[i]?.concat(item) ?? [item];
    });
    return filteredGroups;
  }
  static {
    this.ɵfac = function TuiFilterByInputPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFilterByInputPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFilterByInput",
      type: _TuiFilterByInputPipe,
      pure: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterByInputPipe, [{
    type: Pipe,
    args: [{
      name: "tuiFilterByInput",
      pure: false
    }]
  }], null, null);
})();

// node_modules/@ng-web-apis/resize-observer/fesm2022/ng-web-apis-resize-observer.mjs
var SafeObserver = typeof ResizeObserver !== "undefined" ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
};
var WA_RESIZE_OPTION_BOX_DEFAULT = "content-box";
var WA_RESIZE_OPTION_BOX = new InjectionToken(ngDevMode ? "[WA_RESIZE_OPTION_BOX]" : "", {
  factory: () => WA_RESIZE_OPTION_BOX_DEFAULT
});
var WaResizeObserverService = class _WaResizeObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const box = inject(WA_RESIZE_OPTION_BOX);
    super((subscriber) => {
      const observer = new SafeObserver((entries) => subscriber.next(entries));
      observer.observe(nativeElement, {
        box
      });
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function WaResizeObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaResizeObserverService,
    factory: _WaResizeObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserverService, [{
    type: Injectable
  }], () => [], null);
})();
var WaResizeObserver = class _WaResizeObserver {
  waResizeObserver = outputFromObservable(inject(WaResizeObserverService));
  waResizeBox = WA_RESIZE_OPTION_BOX_DEFAULT;
  static ɵfac = function WaResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaResizeObserver,
    selectors: [["", "waResizeObserver", ""]],
    inputs: {
      waResizeBox: "waResizeBox"
    },
    outputs: {
      waResizeObserver: "waResizeObserver"
    },
    features: [ɵɵProvidersFeature([WaResizeObserverService, {
      provide: WA_RESIZE_OPTION_BOX,
      useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || WA_RESIZE_OPTION_BOX_DEFAULT
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserver, [{
    type: Directive,
    args: [{
      selector: "[waResizeObserver]",
      inputs: ["waResizeBox"],
      providers: [WaResizeObserverService, {
        provide: WA_RESIZE_OPTION_BOX,
        useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || WA_RESIZE_OPTION_BOX_DEFAULT
      }]
    }]
  }], null, {
    waResizeObserver: [{
      type: Output,
      args: ["waResizeObserver"]
    }]
  });
})();
var WA_RESIZE_OBSERVER_SUPPORT = new InjectionToken(ngDevMode ? "[WA_RESIZE_OBSERVER_SUPPORT]" : "", {
  factory: () => !!inject(WA_WINDOW).ResizeObserver
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var TuiValueTransformer = class {
};
function tuiValueTransformerFrom(token) {
  return {
    provide: TuiValueTransformer,
    useFactory: () => inject(token).valueTransformer
  };
}
var TuiNonNullableValueTransformer = class extends TuiValueTransformer {
  fromControlValue(value) {
    this.prevValue = value;
    return value;
  }
  toControlValue(value) {
    this.prevValue = value ?? this.prevValue;
    return this.prevValue;
  }
};
var TUI_IDENTITY_VALUE_TRANSFORMER = {
  fromControlValue: identity,
  toControlValue: identity
};
var FLAGS = {
  self: true,
  optional: true
};
var TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS) ?? TUI_IDENTITY_VALUE_TRANSFORMER;
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = input(false);
    this.pseudoInvalid = input(null, {
      alias: "invalid"
    });
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => {
      const pseudoInvalid = this.pseudoInvalid();
      return pseudoInvalid === null ? this.interactive() && this.touched() && this.status() === "INVALID" : pseudoInvalid && this.interactive();
    });
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      const internal = untracked(this.internal);
      if (value === internal) {
        return;
      }
      onChange(this.transformer.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.transformer.fromControlValue(safe));
    this.update();
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiControl)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiControl,
      inputs: {
        readOnly: [1, "readOnly"],
        pseudoInvalid: [1, "invalid", "pseudoInvalid"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], () => [], null);
})();
function tuiAsControl(control) {
  return tuiProvide(TuiControl, control);
}
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c06 = ["ghost"];
var _c1 = ["vcr"];
var _c2 = [[["input"]], [["select"]], [["textarea"]], [["label"]], "*", [["tui-icon"]]];
var _c3 = ["input", "select", "textarea", "label", "*", "tui-icon"];
var _c4 = (a0) => ({
  $implicit: a0
});
function TuiTextfieldComponent_Conditional_0_Template(rf, ctx) {
}
function TuiTextfieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiTextfieldComponent_Conditional_10_Template_button_click_0_listener() {
      let tmp_3_0;
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView((tmp_3_0 = ctx_r2.accessor()) == null ? null : tmp_3_0.setValue(null));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.clear(), " ");
  }
}
function TuiTextfieldComponent_Conditional_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiTextfieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, TuiTextfieldComponent_Conditional_12_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("tuiCell", ctx_r2.options.size());
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_4_0 = ctx_r2.control()) == null ? null : tmp_4_0.value));
  }
}
function TuiTextfieldComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 5, 1);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.computedFiller());
  }
}
function TuiTextfieldItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate(text_r1);
  }
}
var _c5 = ["multi", ""];
var _c6 = [[["label"]], [["input"]], [["select"]], "*", [["tui-icon"]]];
var _c7 = ["label", "input", "select", "*", "tui-icon"];
var _c8 = (a0, a1) => ({
  item: a0,
  index: a1
});
function TuiTextfieldMultiComponent_Conditional_0_Template(rf, ctx) {
}
function TuiTextfieldMultiComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 1);
  }
}
function TuiTextfieldMultiComponent_For_6_ng_template_0_Template(rf, ctx) {
}
function TuiTextfieldMultiComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiTextfieldMultiComponent_For_6_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.component)("polymorpheusOutletContext", ɵɵpureFunction1(5, _c4, ɵɵpureFunction2(2, _c8, item_r2, $index_r3)));
  }
}
function TuiTextfieldMultiComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.placeholder);
  }
}
function TuiTextfieldMultiComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiTextfieldMultiComponent_Conditional_14_Template_button_click_0_listener() {
      let tmp_3_0;
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView((tmp_3_0 = ctx_r3.accessor()) == null ? null : tmp_3_0.setValue([]));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.clear(), " ");
  }
}
function TuiTextfieldMultiComponent_Conditional_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r6 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r6, " ");
  }
}
function TuiTextfieldMultiComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, TuiTextfieldMultiComponent_Conditional_18_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("tuiCell", ctx_r3.options.size());
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.content())("polymorpheusOutletContext", ɵɵpureFunction1(3, _c4, (tmp_4_0 = ctx_r3.control()) == null ? null : tmp_4_0.value));
  }
}
var DEFAULT = {
  appearance: "textfield",
  size: "l",
  cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_OPTIONS" : "", {
  factory: () => ({
    appearance: signal(DEFAULT.appearance),
    size: signal(DEFAULT.size),
    cleaner: signal(DEFAULT.cleaner)
  })
});
function tuiTextfieldOptionsProvider(options) {
  return {
    provide: TUI_TEXTFIELD_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
    useFactory: (parent) => __spreadValues({
      appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
      size: signal(parent?.size() ?? DEFAULT.size),
      cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner)
    }, options)
  };
}
var TuiTextfieldOptionsDirective = class _TuiTextfieldOptionsDirective {
  constructor() {
    this.options = inject(TUI_TEXTFIELD_OPTIONS, {
      skipSelf: true
    });
    this.appearance = input(this.options.appearance(), {
      alias: "tuiTextfieldAppearance"
    });
    this.size = input(this.options.size(), {
      alias: "tuiTextfieldSize",
      transform: (size) => size || DEFAULT.size
    });
    this.cleaner = input(this.options.cleaner(), {
      alias: "tuiTextfieldCleaner"
    });
  }
  static {
    this.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldOptionsDirective,
      selectors: [["", "tuiTextfieldAppearance", ""], ["", "tuiTextfieldSize", ""], ["", "tuiTextfieldCleaner", ""]],
      inputs: {
        appearance: [1, "tuiTextfieldAppearance", "appearance"],
        size: [1, "tuiTextfieldSize", "size"],
        cleaner: [1, "tuiTextfieldCleaner", "cleaner"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTextfieldOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
    }]
  }], null, null);
})();
var TuiSelectLike = class _TuiSelectLike {
  constructor() {
    this.el = tuiInjectElement();
    this.isAndroid = inject(WA_IS_ANDROID);
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
  }
  clear() {
    this.el.value = "";
  }
  prevent(event) {
    if (!this.isAndroid) {
      return;
    }
    event.preventDefault();
    this.el.focus();
  }
  static {
    this.ɵfac = function TuiSelectLike_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSelectLike)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSelectLike,
      selectors: [["", "tuiSelectLike", ""]],
      hostAttrs: ["autocomplete", "off", "inputmode", "none", "spellcheck", "false", "tuiSelectLike", ""],
      hostBindings: function TuiSelectLike_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("beforeinput", function TuiSelectLike_beforeinput_HostBindingHandler($event) {
            return ctx.options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault();
          })("input.capture", function TuiSelectLike_input_capture_HostBindingHandler($event) {
            return ($event.inputType == null ? null : $event.inputType.includes("delete")) && ctx.clear();
          })("keydown.backspace", function TuiSelectLike_keydown_backspace_HostBindingHandler() {
            return ctx.options.cleaner() && ctx.clear();
          })("keydown.delete", function TuiSelectLike_keydown_delete_HostBindingHandler() {
            return ctx.options.cleaner() && ctx.clear();
          })("mousedown", function TuiSelectLike_mousedown_HostBindingHandler($event) {
            return ctx.prevent($event);
          });
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectLike, [{
    type: Directive,
    args: [{
      selector: "[tuiSelectLike]",
      host: {
        autocomplete: "off",
        inputmode: "none",
        spellcheck: "false",
        tuiSelectLike: "",
        // Click on cleaner icon does not trigger `beforeinput` event --> handle all kind of deletion in input event
        "(beforeinput)": 'options.cleaner() && $event.inputType.includes("delete") || $event.preventDefault()',
        "(input.capture)": '$event.inputType?.includes("delete") && clear()',
        "(keydown.backspace)": "options.cleaner() && clear()",
        // No (input) event if caret is at the beginning
        "(keydown.delete)": "options.cleaner() && clear()",
        // No (input) event if caret is at the end
        // Hide Android text select handle (bubble marker below transparent caret)
        "(mousedown)": "prevent($event)"
      }
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_ACCESSOR = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_ACCESSOR" : "");
function tuiAsTextfieldAccessor(accessor) {
  return tuiProvide(TUI_TEXTFIELD_ACCESSOR, accessor);
}
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.autoId = tuiGenerateId();
    this.focusedIn = tuiFocusedIn(tuiInjectElement());
    this.ghost = viewChild("ghost");
    this.dropdown = inject(TuiDropdownDirective);
    this.open = inject(TuiDropdownOpen);
    this.clear = inject(TUI_CLEAR_WORD);
    this.label = contentChild(forwardRef(() => TuiLabel), {
      read: ElementRef
    });
    this.computedFiller = computed((value = this.value()) => {
      const filler = this.filler();
      if (filler.length <= value.length) {
        return "";
      }
      return this.input()?.nativeElement.matches('[dir="rtl"] :scope') ? `${filler.slice(0, filler.length - value.length)}${value}` : `${value}${filler.slice(value.length)}`;
    });
    this.showFiller = computed(() => this.focused() && !!this.computedFiller() && (!!this.value() || !this.input()?.nativeElement.placeholder));
    this.accessor = contentChild(TUI_TEXTFIELD_ACCESSOR, {
      descendants: true
    });
    this.vcr = viewChild("vcr", {
      read: ViewContainerRef
    });
    this.control = contentChild(NgControl);
    this.auxiliaries = contentChildren(TUI_AUXILIARY, {
      descendants: true
    });
    this.focused = computed(() => this.open.open() || this.focusedIn());
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.el = tuiInjectElement();
    this.input = contentChild(TUI_TEXTFIELD_ACCESSOR, {
      read: ElementRef
    });
    this.content = input();
    this.filler = input("");
    this.value = tuiValue(this.input);
  }
  get id() {
    return this.input()?.nativeElement.id || this.autoId;
  }
  get disabled() {
    return this.control()?.disabled ?? this.input()?.nativeElement?.disabled ?? false;
  }
  get size() {
    return this.options.size();
  }
  handleOption(option) {
    this.accessor()?.setValue(option);
    this.open.open.set(false);
  }
  get hasLabel() {
    return Boolean(this.label()?.nativeElement?.childNodes.length);
  }
  onResize({
    contentRect
  }) {
    this.el.style.setProperty("--t-side", tuiPx(contentRect.width));
  }
  // Click on ::before,::after pseudo-elements ([iconStart] / [iconEnd])
  onIconClick() {
    this.input()?.nativeElement.focus();
    if (!this.open.enabled() || this.input()?.nativeElement.matches("input:read-only,textarea:read-only")) {
      return;
    }
    this.open.open.update((open) => !open);
    try {
      this.input()?.nativeElement.showPicker?.();
    } catch {
    }
  }
  onScroll(element) {
    const input2 = this.input();
    if (input2?.nativeElement === element) {
      this.ghost()?.nativeElement.scrollTo({
        left: input2?.nativeElement.scrollLeft
      });
    }
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["tui-textfield", 3, "multi", ""]],
      contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.label, TuiLabel, 5, ElementRef)(dirIndex, ctx.accessor, TUI_TEXTFIELD_ACCESSOR, 5)(dirIndex, ctx.control, NgControl, 5)(dirIndex, ctx.auxiliaries, TUI_AUXILIARY, 5)(dirIndex, ctx.input, TUI_TEXTFIELD_ACCESSOR, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(5);
        }
      },
      viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.ghost, _c06, 5)(ctx.vcr, _c1, 5, ViewContainerRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostAttrs: [1, "tui-interactive"],
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel", function TuiTextfieldComponent_animationcancel_HostBindingHandler() {
            return 0;
          })("animationstart", function TuiTextfieldComponent_animationstart_HostBindingHandler() {
            return 0;
          })("click.self.prevent", function TuiTextfieldComponent_click_self_prevent_HostBindingHandler() {
            return 0;
          })("pointerdown.self.prevent", function TuiTextfieldComponent_pointerdown_self_prevent_HostBindingHandler() {
            return ctx.onIconClick();
          })("scroll.capture.zoneless", function TuiTextfieldComponent_scroll_capture_zoneless_HostBindingHandler($event) {
            return ctx.onScroll($event.target);
          })("tuiActiveZoneChange", function TuiTextfieldComponent_tuiActiveZoneChange_HostBindingHandler($event) {
            let tmp_0_0;
            return !$event && ((tmp_0_0 = ctx.control()) == null ? null : tmp_0_0.valueAccessor == null ? null : tmp_0_0.valueAccessor.onTouched == null ? null : tmp_0_0.valueAccessor.onTouched());
          });
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵattribute("data-size", ctx.options.size());
          ɵɵclassProp("_disabled", ctx.disabled)("_with-label", ctx.hasLabel)("_with-template", ctx.content() && ((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value) != null);
        }
      },
      inputs: {
        content: [1, "content"],
        filler: [1, "filler"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(_TuiTextfieldComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(_TuiTextfieldComponent).value
      }]), ɵɵHostDirectivesFeature([TuiAppearance, TuiDropdownDirective, TuiDropdownFixed, TuiWithDropdownOpen, TuiWithIcons, TuiWithItemsHandlers, TuiWithOptionContent])],
      ngContentSelectors: _c3,
      decls: 14,
      vars: 6,
      consts: [["vcr", ""], ["ghost", ""], [1, "t-content", 3, "pointerdown", "waResizeObserver"], ["tuiButtonX", ""], [1, "t-template", 3, "tuiCell"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"], ["tuiButtonX", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c2);
          ɵɵconditionalCreate(0, TuiTextfieldComponent_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
          ɵɵprojection(3, 1);
          ɵɵprojection(4, 2);
          ɵɵprojection(5, 3);
          ɵɵelementStart(6, "span", 2);
          ɵɵlistener("pointerdown", function TuiTextfieldComponent_Template_span_pointerdown_6_listener() {
            let tmp_2_0;
            ɵɵrestoreView(_r1);
            return ɵɵresetView((tmp_2_0 = ctx.input()) == null ? null : tmp_2_0.nativeElement == null ? null : tmp_2_0.nativeElement.focus());
          })("waResizeObserver", function TuiTextfieldComponent_Template_span_waResizeObserver_6_listener($event) {
            return $event[0] && ctx.onResize($event[0]);
          });
          ɵɵprojection(7, 4);
          ɵɵelementContainer(8, null, 0);
          ɵɵconditionalCreate(10, TuiTextfieldComponent_Conditional_10_Template, 2, 1, "button", 3);
          ɵɵprojection(11, 5);
          ɵɵelementEnd();
          ɵɵconditionalCreate(12, TuiTextfieldComponent_Conditional_12_Template, 2, 5, "span", 4);
          ɵɵconditionalCreate(13, TuiTextfieldComponent_Conditional_13_Template, 2, 1, "input", 5);
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_3_0;
          ɵɵconditional(ɵɵpipeBind1(1, 4, (tmp_1_0 = ctx.control()) == null ? null : tmp_1_0.control == null ? null : tmp_1_0.control.valueChanges) ? 0 : -1);
          ɵɵadvance(10);
          ɵɵconditional(ctx.options.cleaner() ? 10 : -1);
          ɵɵadvance(2);
          ɵɵconditional(((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value) != null ? 12 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showFiller() ? 13 : -1);
        }
      },
      dependencies: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, WaResizeObserver],
      styles: ['tui-textfield:where(*[data-tui-version="5.6.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media (hover: hover) and (pointer: fine){tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before{z-index:1;inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;overscroll-behavior:none;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.6.0"]) button,tui-textfield:where(*[data-tui-version="5.6.0"]) a,tui-textfield:where(*[data-tui-version="5.6.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.6.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield:not([multi])",
      imports: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, WaResizeObserver],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(TuiTextfieldComponent), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }],
      hostDirectives: [TuiAppearance, TuiDropdownDirective, TuiDropdownFixed, TuiWithDropdownOpen, TuiWithIcons, TuiWithItemsHandlers, TuiWithOptionContent],
      host: {
        class: "tui-interactive",
        "[attr.data-size]": "options.size()",
        "[class._disabled]": "disabled",
        // TODO :has([tuiInput]:disabled)
        "[class._with-label]": "hasLabel",
        // TODO :has([tuiLabel]
        "[class._with-template]": "content() && control()?.value != null",
        "(animationcancel)": "0",
        // TODO :has([tuiInput]:disabled)
        "(animationstart)": "0",
        // TODO :has([tuiInput]:disabled)
        "(click.self.prevent)": "0",
        // TODO preventing breaks resize: both, but not preventing breaks focus, fix
        "(pointerdown.self.prevent)": "onIconClick()",
        "(scroll.capture.zoneless)": "onScroll($event.target)",
        "(tuiActiveZoneChange)": "!$event && control()?.valueAccessor?.onTouched?.()"
      },
      template: '@if (control()?.control?.valueChanges | async) {}\n<ng-content select="input" />\n<ng-content select="select" />\n<ng-content select="textarea" />\n<ng-content select="label" />\n<span\n    class="t-content"\n    (pointerdown)="input()?.nativeElement?.focus()"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content />\n    <ng-container #vcr />\n    @if (options.cleaner()) {\n        <button\n            tuiButtonX\n            (click)="accessor()?.setValue(null)"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-content select="tui-icon" />\n</span>\n@if (control()?.value != null) {\n    <span\n        class="t-template"\n        [tuiCell]="options.size()"\n    >\n        <ng-container *polymorpheusOutlet="content() as text; context: {$implicit: control()?.value}">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n@if (showFiller()) {\n    <input\n        #ghost\n        aria-hidden="true"\n        disabled\n        class="t-filler"\n        [value]="computedFiller()"\n    />\n}\n',
      styles: ['tui-textfield:where(*[data-tui-version="5.6.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media (hover: hover) and (pointer: fine){tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before{z-index:1;inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;overscroll-behavior:none;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.6.0"]) button,tui-textfield:where(*[data-tui-version="5.6.0"]) a,tui-textfield:where(*[data-tui-version="5.6.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.6.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}\n']
    }]
  }], null, null);
})();
var TuiTextfieldItemComponent = class _TuiTextfieldItemComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.context = injectContext();
    this.textfield = inject(TuiTextfieldMultiComponent);
    this.content = computed(() => this.textfield.item() ?? this.handlers.stringify()(this.context.$implicit.item));
  }
  prevent(e) {
    this.textfield.focused() && e.preventDefault();
  }
  static {
    this.ɵfac = function TuiTextfieldItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldItemComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldItemComponent,
      selectors: [["tui-textfield-item"]],
      hostVars: 4,
      hostBindings: function TuiTextfieldItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft.prevent", function TuiTextfieldItemComponent_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.el.previousElementSibling == null ? null : ctx.el.previousElementSibling.firstChild == null ? null : ctx.el.previousElementSibling.firstChild.focus();
          })("keydown.arrowRight.prevent", function TuiTextfieldItemComponent_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.el.nextElementSibling == null ? null : ctx.el.nextElementSibling.firstChild == null ? null : ctx.el.nextElementSibling.firstChild.focus();
          })("pointerdown.self", function TuiTextfieldItemComponent_pointerdown_self_HostBindingHandler($event) {
            return ctx.prevent($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_disabled", ctx.handlers.disabledItemHandler()(ctx.context.$implicit.item))("_string", !ctx.textfield.item());
        }
      },
      decls: 1,
      vars: 2,
      consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiTextfieldItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ['[_nghost-%COMP%]{max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--tui-text-primary)}._string[_nghost-%COMP%]{overflow:hidden;overflow:clip visible}._string._disabled[_nghost-%COMP%]{opacity:var(--tui-disabled-opacity)}._string[_nghost-%COMP%]:after{content:",\\a0"}[_nghost-%COMP%]:last-of-type{max-inline-size:80%}tui-textfield:not([data-focus="true"])[_nghost-%COMP%]:last-of-type:after, tui-textfield:not([data-focus="true"])   [_nghost-%COMP%]:last-of-type:after{display:none}tui-textfield:has([tuiSelectLike])[_nghost-%COMP%]:last-of-type:after, tui-textfield:has([tuiSelectLike])   [_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~="readonly"][_nghost-%COMP%]:last-of-type:after, tui-textfield[data-mode~="readonly"]   [_nghost-%COMP%]:last-of-type:after{content:"\\a0"}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldItemComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield-item",
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="content() as text; context: context">{{ text }}</ng-container>',
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._disabled]": "handlers.disabledItemHandler()(context.$implicit.item)",
        "[class._string]": "!textfield.item()",
        "(keydown.arrowLeft.prevent)": "el.previousElementSibling?.firstChild?.focus()",
        "(keydown.arrowRight.prevent)": "el.nextElementSibling?.firstChild?.focus()",
        "(pointerdown.self)": "prevent($event)"
      },
      styles: [':host{max-inline-size:100%;flex-shrink:0;white-space:nowrap;text-overflow:ellipsis;color:var(--tui-text-primary)}:host._string{overflow:hidden;overflow:clip visible}:host._string._disabled{opacity:var(--tui-disabled-opacity)}:host._string:after{content:",\\a0"}:host:last-of-type{max-inline-size:80%}:host-context(tui-textfield:not([data-focus="true"])):last-of-type:after{display:none}:host-context(tui-textfield:has([tuiSelectLike])):last-of-type:after,:host-context(tui-textfield[data-mode~="readonly"]):last-of-type:after{content:"\\a0"}\n']
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_ITEM = new PolymorpheusComponent(TuiTextfieldItemComponent);
var TuiTextfieldMultiComponent = class _TuiTextfieldMultiComponent extends TuiTextfieldComponent {
  constructor() {
    super(...arguments);
    this.height = signal(null);
    this.win = inject(WA_WINDOW);
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.component = TUI_TEXTFIELD_ITEM;
    this.sub = fromEvent(this.el, "scroll").pipe(filter(() => this.rows() === 1), tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      this.el.style.setProperty("--t-scroll", tuiPx(-1 * this.el.scrollLeft));
    });
    this.cva = contentChild(TuiControl);
    this.item = contentChild(TuiItem, {
      read: TemplateRef,
      descendants: true
    });
    this.rows = input(100);
  }
  handleOption(option) {
    this.accessor()?.setValue(tuiArrayToggle(this.control()?.value ?? [], option, this.handlers.identityMatcher()));
  }
  get placeholder() {
    const el = this.input()?.nativeElement;
    const placeholder = el?.matches("input") ? el.placeholder : this.computedFiller();
    const value = this.computedFiller() || this.value();
    const longer = value.length > placeholder.length ? value : placeholder;
    return this.focused() ? longer : "";
  }
  onItems({
    target
  }) {
    const height = this.rows() > 1 && this.control()?.value?.length ? target.querySelector("tui-textfield-item")?.clientHeight ?? 0 : null;
    if (height !== 0) {
      this.height.set(height);
    }
  }
  onLeft(event) {
    if (this.value() || !tuiIsElement(event.currentTarget)) {
      return;
    }
    event.preventDefault();
    event.currentTarget.previousElementSibling?.firstElementChild?.focus();
  }
  focusInput() {
    const selection = this.win.getSelection();
    if (!selection?.rangeCount || selection.getRangeAt(0)?.collapsed) {
      this.input()?.nativeElement.focus();
    }
  }
  onClick(target) {
    if (target === this.el || !this.cva()?.interactive() || !this.el.matches("[tuiChevron]") && !this.el.querySelector("select, [tuiInputDateMulti]") || target.matches('input:read-only,input[inputmode="none"]')) {
      return;
    }
    this.open.open.update((open) => !open);
    try {
      this.input()?.nativeElement.showPicker?.();
    } catch {
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldMultiComponent_BaseFactory;
      return function TuiTextfieldMultiComponent_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldMultiComponent_BaseFactory || (ɵTuiTextfieldMultiComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldMultiComponent)))(__ngFactoryType__ || _TuiTextfieldMultiComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldMultiComponent,
      selectors: [["tui-textfield", "multi", ""]],
      contentQueries: function TuiTextfieldMultiComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.cva, TuiControl, 5)(dirIndex, ctx.item, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostVars: 7,
      hostBindings: function TuiTextfieldMultiComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.prevent", function TuiTextfieldMultiComponent_click_prevent_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          })("tuiActiveZoneChange", function TuiTextfieldMultiComponent_tuiActiveZoneChange_HostBindingHandler($event) {
            return !$event && ctx.el.scrollTo({
              left: 0
            });
          });
        }
        if (rf & 2) {
          let tmp_3_0;
          ɵɵattribute("data-state", ctx.disabled ? "disabled" : null);
          ɵɵstyleProp("--t-item-height", ctx.height(), "px")("--t-rows", ctx.rows());
          ɵɵclassProp("_empty", !((tmp_3_0 = ctx.control()) == null ? null : tmp_3_0.value == null ? null : tmp_3_0.value.length));
        }
      },
      inputs: {
        rows: [1, "rows"]
      },
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(_TuiTextfieldMultiComponent), tuiProvide(TuiTextfieldComponent, _TuiTextfieldMultiComponent), tuiProvide(TUI_SCROLL_REF, ElementRef), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }, tuiFilterByInputOptionsProvider({
        filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
      })]), ɵɵInheritDefinitionFeature],
      attrs: _c5,
      ngContentSelectors: _c7,
      decls: 19,
      vars: 12,
      consts: [["vcr", ""], [1, "t-scrollbar"], [1, "t-items", 3, "click", "pointerdown.self.zoneless.prevent", "waResizeObserver"], [3, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-input", 3, "keydown.arrowLeft"], [1, "t-ghost"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"], [1, "t-content", 3, "click.stop", "pointerdown.zoneless.prevent", "waResizeObserver"], ["tuiButtonX", ""], [1, "t-template", 3, "tuiCell"], ["tuiButtonX", "", 3, "click"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTextfieldMultiComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c6);
          ɵɵconditionalCreate(0, TuiTextfieldMultiComponent_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵconditionalCreate(2, TuiTextfieldMultiComponent_Conditional_2_Template, 1, 0, "tui-scroll-controls", 1);
          ɵɵelementStart(3, "div", 2);
          ɵɵlistener("click", function TuiTextfieldMultiComponent_Template_div_click_3_listener() {
            return ctx.focusInput();
          })("pointerdown.self.zoneless.prevent", function TuiTextfieldMultiComponent_Template_div_pointerdown_self_zoneless_prevent_3_listener() {
            return 0;
          })("waResizeObserver", function TuiTextfieldMultiComponent_Template_div_waResizeObserver_3_listener($event) {
            return $event[0] && ctx.onItems($event[0]);
          });
          ɵɵprojection(4);
          ɵɵrepeaterCreate(5, TuiTextfieldMultiComponent_For_6_Template, 1, 7, null, 3, ɵɵrepeaterTrackByIdentity);
          ɵɵelementStart(7, "span", 4);
          ɵɵlistener("keydown.arrowLeft", function TuiTextfieldMultiComponent_Template_span_keydown_arrowLeft_7_listener($event) {
            return ctx.onLeft($event);
          });
          ɵɵprojection(8, 1);
          ɵɵprojection(9, 2);
          ɵɵconditionalCreate(10, TuiTextfieldMultiComponent_Conditional_10_Template, 2, 1, "span", 5);
          ɵɵelement(11, "input", 6);
          ɵɵelementEnd()();
          ɵɵelementStart(12, "span", 7);
          ɵɵlistener("click.stop", function TuiTextfieldMultiComponent_Template_span_click_stop_12_listener() {
            let tmp_2_0;
            ɵɵrestoreView(_r1);
            return ɵɵresetView((tmp_2_0 = ctx.input()) == null ? null : tmp_2_0.nativeElement == null ? null : tmp_2_0.nativeElement.focus());
          })("pointerdown.zoneless.prevent", function TuiTextfieldMultiComponent_Template_span_pointerdown_zoneless_prevent_12_listener() {
            return 0;
          })("waResizeObserver", function TuiTextfieldMultiComponent_Template_span_waResizeObserver_12_listener($event) {
            return $event[0] && ctx.onResize($event[0]);
          });
          ɵɵprojection(13, 3);
          ɵɵconditionalCreate(14, TuiTextfieldMultiComponent_Conditional_14_Template, 2, 1, "button", 8);
          ɵɵelementContainer(15, null, 0);
          ɵɵprojection(17, 4);
          ɵɵelementEnd();
          ɵɵconditionalCreate(18, TuiTextfieldMultiComponent_Conditional_18_Template, 2, 5, "span", 9);
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_4_0;
          let tmp_9_0;
          ɵɵconditional(ɵɵpipeBind1(1, 10, (tmp_1_0 = ctx.control()) == null ? null : tmp_1_0.control == null ? null : tmp_1_0.control.valueChanges) ? 0 : -1);
          ɵɵadvance(2);
          ɵɵconditional(ctx.rows() > 1 ? 2 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-items_horizontal", ctx.rows() === 1);
          ɵɵadvance(2);
          ɵɵrepeater((tmp_4_0 = ctx.control()) == null ? null : tmp_4_0.value);
          ɵɵadvance(5);
          ɵɵconditional(ctx.placeholder ? 10 : -1);
          ɵɵadvance();
          ɵɵclassProp("t-filler_hidden", !ctx.showFiller());
          ɵɵproperty("value", ctx.computedFiller());
          ɵɵadvance(3);
          ɵɵconditional(ctx.options.cleaner() ? 14 : -1);
          ɵɵadvance(4);
          ɵɵconditional(((tmp_9_0 = ctx.control()) == null ? null : tmp_9_0.value) != null ? 18 : -1);
        }
      },
      dependencies: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, TuiScrollControls, WaResizeObserver],
      styles: ['tui-textfield:where(*[data-tui-version="5.6.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media (hover: hover) and (pointer: fine){tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before{z-index:1;inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;overscroll-behavior:none;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.6.0"]) button,tui-textfield:where(*[data-tui-version="5.6.0"]) a,tui-textfield:where(*[data-tui-version="5.6.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.6.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--t-vertical) * 2 + var(--t-item-height) * var(--t-rows));overscroll-behavior-x:none;scroll-behavior:var(--tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):before,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:var(--t-height)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-scrollbar{transform:translate(calc(var(--t-padding) * var(--tui-inline)));margin-inline-start:calc(-1 * var(--t-start));margin-inline-end:calc(1px - 100% + var(--t-start))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):not(._empty)>.t-items{min-block-size:fit-content}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items{position:sticky;display:flex;inset-inline-start:var(--t-start);min-inline-size:0;max-block-size:var(--t-height);flex:1;align-items:center;flex-wrap:wrap;padding:var(--t-vertical) 0;transition-duration:inherit;box-sizing:border-box}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items:after{content:"";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items_horizontal{clip-path:inset(0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--t-side) + var(--t-end) + var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--t-item-height, 1.25em);max-inline-size:100%;pointer-events:none;transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=l]{--t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=l]>.t-items>label[tuiLabel]{margin-block:.625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=l] tui-textfield-item:not(._string):first-of-type{margin-block-start:1.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=m]{--t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=m]>.t-items>label[tuiLabel]{margin-block:.4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=m] tui-textfield-item:not(._string):first-of-type{margin-block-start:1rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin-inline-end:-100%;padding:calc(var(--tui-font-offset) / 2) 0 0}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-content{position:sticky;inset-block-start:0;inset-inline-start:calc(100% - var(--t-side) - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=l]{--t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=l]:after{inset-inline-start:calc(100% - var(--t-end) - var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inset-inline-start:calc(100% - var(--t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inset-inline-start:calc(100% - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]) tui-textfield-item{transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]) input::placeholder{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):has([tuiSelectLike]){cursor:pointer}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldMultiComponent, [{
    type: Component,
    args: [{
      selector: "tui-textfield[multi]",
      imports: [AsyncPipe, PolymorpheusOutlet, TuiButtonX, TuiCell, TuiScrollControls, WaResizeObserver],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      }), tuiAsDataListHost(TuiTextfieldMultiComponent), tuiProvide(TuiTextfieldComponent, TuiTextfieldMultiComponent), tuiProvide(TUI_SCROLL_REF, ElementRef), {
        provide: TUI_TEXTFIELD_VALUE,
        useFactory: () => inject(TuiTextfieldComponent).value
      }, tuiFilterByInputOptionsProvider({
        filter: (items, search, stringify) => items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify))
      })],
      host: {
        "[attr.data-state]": 'disabled ? "disabled" : null',
        "[class._empty]": "!control()?.value?.length",
        "[style.--t-item-height.px]": "height()",
        "[style.--t-rows]": "rows()",
        "(click.prevent)": "onClick($event.target)",
        "(tuiActiveZoneChange)": "!$event && el.scrollTo({left: 0})"
      },
      template: '@if (control()?.control?.valueChanges | async) {}\n@if (rows() > 1) {\n    <tui-scroll-controls class="t-scrollbar" />\n}\n\n<div\n    class="t-items"\n    [class.t-items_horizontal]="rows() === 1"\n    (click)="focusInput()"\n    (pointerdown.self.zoneless.prevent)="(0)"\n    (waResizeObserver)="$event[0] && onItems($event[0])"\n>\n    <ng-content select="label" />\n    @for (item of control()?.value; track item) {\n        <ng-template\n            [polymorpheusOutlet]="component"\n            [polymorpheusOutletContext]="{$implicit: {item, index: $index}}"\n        />\n    }\n    <span\n        class="t-input"\n        (keydown.arrowLeft)="onLeft($event)"\n    >\n        <ng-content select="input" />\n        <ng-content select="select" />\n        @if (placeholder) {\n            <span class="t-ghost">{{ placeholder }}</span>\n        }\n        <input\n            aria-hidden="true"\n            disabled\n            class="t-filler"\n            [class.t-filler_hidden]="!showFiller()"\n            [value]="computedFiller()"\n        />\n    </span>\n</div>\n\n<span\n    class="t-content"\n    (click.stop)="input()?.nativeElement?.focus()"\n    (pointerdown.zoneless.prevent)="(0)"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content />\n    @if (options.cleaner()) {\n        <button\n            tuiButtonX\n            (click)="accessor()?.setValue([])"\n        >\n            {{ clear() }}\n        </button>\n    }\n    <ng-container #vcr />\n    <ng-content select="tui-icon" />\n</span>\n\n@if (control()?.value != null) {\n    <span\n        class="t-template"\n        [tuiCell]="options.size()"\n    >\n        <ng-container *polymorpheusOutlet="content() as text; context: {$implicit: control()?.value}">\n            {{ text }}\n        </ng-container>\n    </span>\n}\n',
      styles: ['tui-textfield:where(*[data-tui-version="5.6.0"]){scrollbar-width:none;-ms-overflow-style:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: calc(var(--tui-height-l) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-l);--t-label: 0;--t-label-y: -.75rem;--t-label-font: var(--tui-typography-ui-s);--t-end: 0px;--t-start: 0px;--t-side: 0px;--t-max: .75rem;--t-space: clamp(0px, calc(var(--t-side) + var(--t-end)), var(--t-max));position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;min-block-size:var(--t-height);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-typography-ui-m);box-sizing:border-box;isolation:isolate}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar,tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar-thumb{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance]{outline:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]{color:var(--tui-text-tertiary)}@media (hover: hover) and (pointer: fine){tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled):hover:not([data-state]){color:var(--tui-text-secondary)}}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiAppearance][data-appearance=""]:not([data-mode~=readonly])[data-state=hover]{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-start]{--t-start: 2.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before{z-index:1;inline-size:1.5rem;margin-inline-end:1rem;pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{position:relative;inline-size:calc(1.5rem + 2 * var(--t-padding));cursor:pointer;margin-inline-start:calc(.25rem - var(--t-padding));margin-inline-end:calc(-1 * var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:before,tui-textfield:where(*[data-tui-version="5.6.0"])[tuiIcons]:after{block-size:var(--t-height);max-block-size:calc(var(--t-height) * (1 - .2 * var(--t-zoom)))}tui-textfield:where(*[data-tui-version="5.6.0"])::-webkit-resizer{border:.25rem solid transparent;inline-size:.5rem;block-size:.5rem;box-sizing:content-box;color:var(--tui-text-tertiary);background:linear-gradient(-45deg,transparent,transparent .125rem,currentColor .125rem,currentColor .1875rem,transparent .1875rem,transparent .25rem,currentColor .25rem,currentColor .3125rem,transparent .35rem);background-clip:content-box}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template{pointer-events:none}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);--t-max: 0px;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-end]{--t-end: 1.5rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:before{font-size:1rem;margin-inline:-.25rem .25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inline-size:calc(.75rem + 2 * var(--t-padding));margin-inline:0 -.5rem;font-size:1rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content{gap:0}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=s]>.t-content>*:last-child{margin-inline-end:-.25rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-height: calc(var(--tui-height-m) + 2.5 * var(--t-label) * var(--tui-font-offset));--t-padding: var(--tui-padding-m);--t-label-font: var(--tui-typography-ui-xs);--t-label-y: -.5625rem;--t-max: .125rem;border-radius:var(--tui-radius-m);font:var(--tui-typography-ui-s)}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start]{--t-start: 2.125rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-end]{--t-end: 1.75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:before{margin-inline:-.125rem .75rem}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inline-size:calc(1.25rem + 2 * var(--t-padding));margin-inline-start:calc(.5rem - var(--t-padding))}tui-textfield:where(*[data-tui-version="5.6.0"])[data-size=m]>.t-content>*:last-child{margin-inline-end:-.125rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]){pointer-events:none;opacity:var(--tui-disabled-opacity)}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) [tuiAppearance]:is(._disabled,:disabled,[data-state=disabled]){opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"]):is(._disabled,[data-state=disabled]) tui-icon{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label{--t-label: 1}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label [tuiInput]{inset-block-end:0;padding-block-start:calc(var(--t-height) / 3);padding-block-end:0}tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly])>.t-template._empty,tui-textfield:where(*[data-tui-version="5.6.0"])._with-label:is(:not([data-focus=true]),[data-mode~=readonly]) [tuiInput]._empty{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]{position:absolute;inset-inline:0;inline-size:auto;block-size:var(--t-height);-webkit-appearance:none;appearance:none;background:none;font:inherit;resize:none;outline:none;color:var(--tui-text-primary);box-sizing:border-box;border-radius:inherit;border-width:0;overscroll-behavior:none;padding-inline-start:calc(var(--t-start) + var(--t-padding));padding-inline-end:calc(var(--t-end) + var(--t-side) + var(--t-padding) + var(--t-space));white-space:nowrap;overflow:hidden}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:is(input,textarea):read-only~.t-filler,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:is(input,textarea):read-only~.t-filler{display:none}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler:disabled,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled{animation:tuiPresent 1s infinite;opacity:1}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler[inputmode=none],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][inputmode=none]{caret-color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-inner-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"])>.t-template::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler::-webkit-outer-spin-button,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}tui-textfield:where(*[data-tui-version="5.6.0"])._with-template [tuiInput]:first-of-type{color:transparent!important}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled] [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:-webkit-autofill:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput][chrome-autofilled]:not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:not(._empty,:placeholder-shown):not(tui-textfield)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"])[multi][multi]:not(._empty):not(tui-textfield)~[tuiLabel]{font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;max-inline-size:calc(100% - var(--t-start));flex:1;align-self:flex-start;font:inherit;-webkit-user-select:none;user-select:none;padding:calc(var(--t-height) / 2 - .625em) 0;line-height:1.25!important;transition-duration:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel][tuiLabel][tuiLabel]+.t-content{margin-inline-start:0}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]::placeholder,tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty{color:var(--tui-text-secondary)}tui-textfield:where(*[data-tui-version="5.6.0"]) select option[value=""]:disabled{color:transparent}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option{background-color:var(--tui-background-elevation-3)}tui-textfield:where(*[data-tui-version="5.6.0"]) select optgroup,tui-textfield:where(*[data-tui-version="5.6.0"]) select option:not(:disabled){color:var(--tui-text-primary)}tui-textfield:where(*[data-tui-version="5.6.0"]) button,tui-textfield:where(*[data-tui-version="5.6.0"]) a,tui-textfield:where(*[data-tui-version="5.6.0"]) tui-icon{pointer-events:auto}tui-textfield:where(*[data-tui-version="5.6.0"])>.t-content{z-index:1;display:flex;block-size:var(--t-height);align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield:where(*[data-tui-version="5.6.0"]) textarea~.t-content{min-inline-size:.5rem}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=readonly],[data-state=disabled],._empty) [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]._empty~.t-content [tuiButtonX],tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiInput]:disabled~.t-content [tuiButtonX]{display:none}tui-textfield:where(*[data-tui-version="5.6.0"]) .t-filler{pointer-events:none!important;color:var(--tui-text-tertiary)}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiFluidTypography]{font-weight:700}tui-textfield:where(*[data-tui-version="5.6.0"]) [tuiSelectLike]:not(:read-only){cursor:pointer}tui-textfield:where(*[data-tui-version="5.6.0"]):has(input[type=tel]){direction:ltr}tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled) [tuiInput]:not(._empty)~[tuiLabel],tui-textfield:where(*[data-tui-version="5.6.0"]):is([data-mode~=invalid],.tui-invalid,:invalid):not([data-mode~=readonly],[data-mode~=valid],[data-state=disabled],:disabled,._disabled)[multi]:not(._empty) [tuiLabel]{color:var(--tui-text-negative)}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly]):focus-visible:not([data-focus=false]) [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield:where(*[data-tui-version="5.6.0"]):not([data-mode~=readonly])[data-focus=true] [tuiLabel]{color:var(--tui-text-primary)!important;font:var(--t-label-font);transform:translateY(calc(var(--t-label-y) - var(--tui-font-offset) / 2))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]){flex-wrap:nowrap;overflow:scroll;align-items:stretch;cursor:text;max-block-size:calc(var(--t-vertical) * 2 + var(--t-item-height) * var(--t-rows));overscroll-behavior-x:none;scroll-behavior:var(--tui-scroll-behavior)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):before,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):after{position:sticky;inset-block-start:0;inset-inline-start:0;block-size:var(--t-height)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-scrollbar{transform:translate(calc(var(--t-padding) * var(--tui-inline)));margin-inline-start:calc(-1 * var(--t-start));margin-inline-end:calc(1px - 100% + var(--t-start))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-scrollbar .t-bar_horizontal{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):not(._empty)>.t-items{min-block-size:fit-content}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items{position:sticky;display:flex;inset-inline-start:var(--t-start);min-inline-size:0;max-block-size:var(--t-height);flex:1;align-items:center;flex-wrap:wrap;padding:var(--t-vertical) 0;transition-duration:inherit;box-sizing:border-box}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items:after{content:"";min-inline-size:1px;min-block-size:1px}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items_horizontal{clip-path:inset(0 0 0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem));flex-wrap:nowrap}[dir=rtl] tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items_horizontal{clip-path:inset(0 calc(var(--t-start) / 2 - var(--t-padding) - .5rem) 0 0)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items_horizontal>.t-input{padding-inline-end:calc(var(--t-side) + var(--t-end) + var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input{position:relative;display:flex;align-items:center;flex:1;block-size:var(--t-item-height, 1.25em);max-inline-size:100%;pointer-events:none;transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input .t-filler,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input [tuiInput]{inset-block-start:-5%;block-size:110%;padding:0;pointer-events:auto}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input .t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;padding-inline-end:.125rem;block-size:100%}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items>.t-input .t-filler_hidden{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=l]{--t-vertical: .5625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=l]>.t-items>label[tuiLabel]{margin-block:.625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=l] tui-textfield-item:not(._string):first-of-type{margin-block-start:1.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=m]{--t-vertical: .4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=m]>.t-items>label[tuiLabel]{margin-block:.4375rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label[data-size=m] tui-textfield-item:not(._string):first-of-type{margin-block-start:1rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label>.t-items{align-items:flex-end}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._with-label>.t-items>label[tuiLabel]{min-inline-size:100%;margin-inline-end:-100%;padding:calc(var(--tui-font-offset) / 2) 0 0}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-content{position:sticky;inset-block-start:0;inset-inline-start:calc(100% - var(--t-side) - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])>.t-items input:not(:focus)::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly]>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly]>.t-items label~.t-input input::placeholder{opacity:0}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._empty>.t-items input::placeholder,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-focus=true]:not([data-mode~=readonly]):not(:focus-within)>.t-items input::placeholder{opacity:1}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-state=disabled],tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly]{pointer-events:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-state=disabled] select,tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-mode~=readonly] select{display:none}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=l]{--t-vertical: .625rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=l]:after{inset-inline-start:calc(100% - var(--t-end) - var(--t-padding) + .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-vertical: .5rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=m]:before{inset-inline-start:-.125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inset-inline-start:calc(100% - var(--t-end) - .25rem)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=s]{--t-vertical: .125rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=s]:before{inset-inline-start:-.25rem}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inset-inline-start:calc(100% - var(--t-end))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]) tui-textfield-item{transform:translate(var(--t-scroll))}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]) input::placeholder{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]) select{opacity:0;pointer-events:none!important}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._empty>.t-items select~.t-filler{display:block}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"])._empty:not([data-focus=true])>.t-items select~.t-filler{color:var(--tui-text-secondary)}tui-textfield[multi][multi]:where(*[data-tui-version="5.6.0"]):has([tuiSelectLike]){cursor:pointer}\n']
    }]
  }], null, null);
})();
var TuiTextfield = [TuiItem, TuiLabel, TuiTextfieldComponent, TuiTextfieldOptionsDirective, TuiTextfieldMultiComponent, TuiDropdownContent];
function tuiInjectAuxiliary(predicate) {
  const {
    auxiliaries
  } = inject(TuiTextfieldComponent);
  return computed(() => auxiliaries().find(predicate) ?? null);
}
var TUI_TEXTFIELD_CONTENT = new InjectionToken(ngDevMode ? "TUI_TEXTFIELD_CONTENT" : "");
function tuiAsTextfieldContent(useValue) {
  return {
    provide: TUI_TEXTFIELD_CONTENT,
    useValue
  };
}
var TuiTextfieldContent = class _TuiTextfieldContent {
  constructor() {
    this.vcr = inject(TuiTextfieldComponent).vcr;
    this.options = {
      injector: inject(INJECTOR$1)
    };
    this.content = inject(TUI_TEXTFIELD_CONTENT, {
      optional: true
    }) || inject(TemplateRef);
    this.ref = computed(() => {
      const vcr = this.vcr();
      return this.content instanceof TemplateRef ? vcr?.createEmbeddedView(this.content) : vcr?.createComponent(this.content, this.options).hostView;
    });
  }
  ngDoCheck() {
    this.ref()?.detectChanges();
  }
  ngOnDestroy() {
    this.ref()?.destroy();
  }
  static {
    this.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldContent,
      selectors: [["ng-template", "tuiTextfieldContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiTextfieldContent]"
    }]
  }], null, null);
})();
var TuiWithNativePicker = class _TuiWithNativePicker {
  constructor() {
    tuiInjectElement().type = "text";
  }
  static {
    this.ɵfac = function TuiWithNativePicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithNativePicker)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithNativePicker
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithNativePicker, [{
    type: Directive
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-input.mjs
var TuiInputDirective = class _TuiInputDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      optional: true
    });
    this.handlers = inject(TUI_ITEMS_HANDLERS);
    this.textfield = inject(TuiTextfieldComponent);
    this.dropdown = inject(TuiDropdownDirective);
    this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    this.s = tuiAppearanceState(computed(() => this.state()));
    this.m = tuiAppearanceMode(computed(() => this.mode()));
    this.f = tuiAppearanceFocus(computed(() => this.focused() ?? this.textfield.focused()));
    this.readOnly = input(false);
    this.invalid = input(null);
    this.focused = input(null);
    this.state = input(null);
    this.value = tuiValue(this.el);
    this.mode = computed(() => {
      if (this.readOnly()) {
        return "readonly";
      }
      if (this.invalid() === false) {
        return "valid";
      }
      return this.invalid() ? "invalid" : null;
    });
  }
  setValue(value) {
    this.el.focus();
    this.el.select();
    if (value == null) {
      this.el.ownerDocument.execCommand("delete");
      this.el.value = "";
    } else {
      this.el.ownerDocument.execCommand("insertText", false, this.handlers.stringify()(value));
    }
  }
  static {
    this.ɵfac = function TuiInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputDirective,
      selectors: [["input", "tuiInput", ""]],
      hostAttrs: ["tuiInput", ""],
      hostVars: 5,
      hostBindings: function TuiInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiInputDirective_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiInputDirective_focusout_HostBindingHandler() {
            return 0;
          })("input", function TuiInputDirective_input_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.textfield.id)("readOnly", ctx.readOnly());
          ɵɵattribute("role", ctx.dropdown.content() && !ctx.el.matches("select") ? "combobox" : null);
          ɵɵclassProp("_empty", ctx.value() === "");
        }
      },
      inputs: {
        readOnly: [1, "readOnly"],
        invalid: [1, "invalid"],
        focused: [1, "focused"],
        state: [1, "state"]
      },
      features: [ɵɵProvidersFeature([tuiAsTextfieldAccessor(_TuiInputDirective)]), ɵɵHostDirectivesFeature([TuiNativeValidator])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[tuiInput]",
      providers: [tuiAsTextfieldAccessor(TuiInputDirective)],
      hostDirectives: [TuiNativeValidator],
      host: {
        tuiInput: "",
        "[attr.role]": 'dropdown.content() && !el.matches("select") ? "combobox" : null',
        "[class._empty]": 'value() === ""',
        "[id]": "textfield.id",
        "[readOnly]": "readOnly()",
        "(focusin)": "0",
        "(focusout)": "0",
        "(input)": "0"
      }
    }]
  }], null, null);
})();
var TuiWithInput = class _TuiWithInput {
  static {
    this.ɵfac = function TuiWithInput_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithInput)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithInput,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiInputDirective,
        inputs: ["invalid", "invalid", "focused", "focused", "readOnly", "readOnly", "state", "state"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithInput, [{
    type: Directive,
    args: [{
      hostDirectives: [{
        directive: TuiInputDirective,
        inputs: ["invalid", "focused", "readOnly", "state"]
      }]
    }]
  }], null, null);
})();
var TuiInput = [TuiLabel, TuiTextfieldComponent, TuiTextfieldOptionsDirective, TuiDropdownContent, TuiInputDirective];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-loader.mjs
var _c07 = ["*"];
function TuiLoader_Conditional_2_Conditional_3_ng_container_1_Template(rf, ctx) {
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
function TuiLoader_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiLoader_Conditional_2_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent());
  }
}
function TuiLoader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "circle", 4);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, TuiLoader_Conditional_2_Conditional_3_Template, 2, 1, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-loader_inherit-color", ctx_r1.inheritColor());
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.textContent() ? 3 : -1);
  }
}
var TUI_LOADER_DEFAULT_OPTIONS = {
  size: "m",
  inheritColor: false,
  overlay: false
};
var [TUI_LOADER_OPTIONS, tuiLoaderOptionsProvider] = tuiCreateOptions(TUI_LOADER_DEFAULT_OPTIONS);
var TuiLoader = class _TuiLoader {
  constructor() {
    this.options = inject(TUI_LOADER_OPTIONS);
    this.isApple = isSafari(tuiInjectElement()) || inject(WA_IS_IOS);
    this.size = input(this.options.size);
    this.inheritColor = input(this.options.inheritColor);
    this.overlay = input(this.options.overlay);
    this.textContent = input();
    this.loading = input(true);
  }
  static {
    this.ɵfac = function TuiLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLoader)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLoader,
      selectors: [["tui-loader"]],
      hostVars: 3,
      hostBindings: function TuiLoader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
          ɵɵclassProp("_loading", ctx.loading());
        }
      },
      inputs: {
        size: [1, "size"],
        inheritColor: [1, "inheritColor"],
        overlay: [1, "overlay"],
        textContent: [1, "textContent"],
        loading: [1, "loading"]
      },
      ngContentSelectors: _c07,
      decls: 3,
      vars: 7,
      consts: [[1, "t-content", 3, "disabled"], [1, "t-loader", 3, "t-loader_inherit-color"], [1, "t-loader"], ["height", "100%", "width", "100%", 1, "t-icon"], [1, "t-circle"], [1, "t-text"], [4, "polymorpheusOutlet"]],
      template: function TuiLoader_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "fieldset", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵconditionalCreate(2, TuiLoader_Conditional_2_Template, 4, 3, "div", 1);
        }
        if (rf & 2) {
          ɵɵstyleProp("opacity", ctx.overlay() && ctx.loading() ? 0.3 : null)("pointer-events", ctx.loading() ? "none" : null);
          ɵɵproperty("disabled", ctx.loading() && !ctx.isApple);
          ɵɵattribute("inert", ctx.loading() || null);
          ɵɵadvance(2);
          ɵɵconditional(ctx.loading() ? 2 : -1);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:grid;flex-shrink:0;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{grid-area:1 / 1;padding:0;margin:0;border:none;isolation:inherit}.t-loader[_ngcontent-%COMP%]{position:relative;display:flex;grid-area:1 / 1;flex-direction:column;gap:1rem;align-items:center;justify-content:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);font-size:1rem}[data-size=xs][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-loader[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-typography-body-s);color:inherit;max-inline-size:100%;text-align:center}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{inline-size:var(--t-diameter);block-size:var(--t-diameter);animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));cx:50%;cy:50%;stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoader, [{
    type: Component,
    args: [{
      selector: "tui-loader",
      imports: [PolymorpheusOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size()",
        "[class._loading]": "loading()"
      },
      template: `<fieldset
    class="t-content"
    [attr.inert]="loading() || null"
    [disabled]="loading() && !isApple"
    [style.opacity]="overlay() && loading() ? 0.3 : null"
    [style.pointer-events]="loading() ? 'none' : null"
>
    <ng-content />
</fieldset>

@if (loading()) {
    <div
        class="t-loader"
        [class.t-loader_inherit-color]="inheritColor()"
    >
        <svg
            height="100%"
            width="100%"
            class="t-icon"
        >
            <circle class="t-circle" />
        </svg>
        @if (textContent()) {
            <div class="t-text">
                <ng-container *polymorpheusOutlet="textContent() as text">
                    {{ text }}
                </ng-container>
            </div>
        }
    </div>
}
`,
      styles: [":host{position:relative;display:grid;flex-shrink:0;--tui-thickness: calc(var(--t-diameter) / 12)}:host._loading{overflow:hidden}:host[data-size=xs]{--t-diameter: .75em}:host[data-size=s]{--t-diameter: 1em}:host[data-size=m]{--t-diameter: 1.5em}:host[data-size=l]{--t-diameter: 2.5em}:host[data-size=xl]{--t-diameter: 3.5em}:host[data-size=xxl]{--t-diameter: 5em}.t-content{grid-area:1 / 1;padding:0;margin:0;border:none;isolation:inherit}.t-loader{position:relative;display:flex;grid-area:1 / 1;flex-direction:column;gap:1rem;align-items:center;justify-content:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);font-size:1rem}:host[data-size=xs] .t-loader,:host[data-size=s] .t-loader{flex-direction:row}.t-loader.t-loader_inherit-color{color:inherit;stroke:currentColor}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-typography-body-s);color:inherit;max-inline-size:100%;text-align:center}@keyframes tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon{inline-size:var(--t-diameter);block-size:var(--t-diameter);animation:tuiLoaderRotate 4s linear infinite}@keyframes tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));cx:50%;cy:50%;stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:tuiLoaderDashOffset 4s linear infinite}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-alert.mjs
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
      exportAs: ["tui-alert-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiAlert]:where(*[data-tui-version="5.6.0"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-inline=end]{justify-self:end;--tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-inline=center]{justify-self:center;--tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end][data-inline=center]{--tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version="5.6.0"]).tui-enter,[tuiAlert]:where(*[data-tui-version="5.6.0"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version="5.6.0"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version="5.6.0"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version="5.6.0"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version="5.6.0"])>*:before,[tuiAlert]:where(*[data-tui-version="5.6.0"])>*:after{content:"";display:block;block-size:.375rem}\n'],
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
      exportAs: `tui-alert-${TUI_VERSION}`,
      styles: ['[tuiAlert]:where(*[data-tui-version="5.6.0"]){position:relative;display:grid;grid-column:1;place-self:start start;isolation:isolate;--tui-from: translateX(-100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-inline=end]{justify-self:end;--tui-from: translateX(100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-inline=center]{justify-self:center;--tui-from: translateY(-100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]{align-self:end}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end][data-inline=center]{--tui-from: translateY(100%)}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(1){grid-row:16}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(2){grid-row:17}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(3){grid-row:18}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(4){grid-row:19}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(5){grid-row:20}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(6){grid-row:21}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(7){grid-row:22}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(8){grid-row:23}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(9){grid-row:24}[tuiAlert]:where(*[data-tui-version="5.6.0"])[data-block=end]:nth-of-type(10){grid-row:25}[tuiAlert]:where(*[data-tui-version="5.6.0"]).tui-enter,[tuiAlert]:where(*[data-tui-version="5.6.0"]).tui-leave{animation-name:tuiFade,tuiSlide,tuiCollapse}[tuiAlert]:where(*[data-tui-version="5.6.0"]):not(:first-of-type){margin-block-start:0!important}[tuiAlert]:where(*[data-tui-version="5.6.0"]):not(:last-of-type){margin-block-end:0!important}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(1){grid-row:5}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(2){grid-row:6}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(3){grid-row:7}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(4){grid-row:8}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(5){grid-row:9}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(6){grid-row:10}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(7){grid-row:11}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(8){grid-row:12}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(9){grid-row:13}[tuiAlert]:where(*[data-tui-version="5.6.0"]):nth-of-type(10){grid-row:14}[tuiAlert]:where(*[data-tui-version="5.6.0"])>*{grid-row:1 / span 2}[tuiAlert]:where(*[data-tui-version="5.6.0"])>*:before,[tuiAlert]:where(*[data-tui-version="5.6.0"])>*:after{content:"";display:block;block-size:.375rem}\n']
    }]
  }], null, null);
})();
var TuiAlertDirective = class _TuiAlertDirective {
  constructor() {
    this.nothing = tuiWithStyles(Styles2);
    this.context = injectContext();
  }
  static {
    this.ɵfac = function TuiAlertDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlertDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAlertDirective,
      hostAttrs: ["data-tui-version", "5.6.0", "role", "alert", "tuiAlert", ""],
      hostVars: 2,
      hostBindings: function TuiAlertDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-block", ctx.context.block)("data-inline", ctx.context.inline);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertDirective, [{
    type: Directive,
    args: [{
      host: {
        "data-tui-version": TUI_VERSION,
        role: "alert",
        tuiAlert: "",
        "[attr.data-block]": "context.block",
        "[attr.data-inline]": "context.inline"
      }
    }]
  }], null, null);
})();
var TuiAlertService = class _TuiAlertService extends TuiPortal {
  constructor(concurrency) {
    super(inject(TuiPopupService));
    this.current = /* @__PURE__ */ new Map();
    this.queue = /* @__PURE__ */ new Set();
    this.concurrency = Math.min(concurrency, 5);
  }
  add(component) {
    if (this.current.size < this.concurrency) {
      this.current.set(component, this.service.add(component));
    } else {
      this.queue.add(component);
    }
    return () => {
      this.current.get(component)?.destroy();
      this.current.delete(component);
      this.queue.delete(component);
      const [next] = this.queue;
      if (this.current.size < this.concurrency && next) {
        this.current.set(next, this.service.add(next));
        this.queue.delete(next);
      }
    };
  }
  static {
    this.ɵfac = function TuiAlertService_Factory(__ngFactoryType__) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiAlertService,
      factory: _TuiAlertService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable
  }], () => [{
    type: void 0
  }], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-title.mjs
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
      exportAs: ["tui-title-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiTitle]:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s]{gap:.125rem;font:var(--tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m]{gap:.125rem;font:var(--tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l]{gap:.5rem;font:var(--tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"]) h1,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h2,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h3,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h4,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h5,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{font:var(--tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n'],
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
      exportAs: `tui-title-${TUI_VERSION}`,
      styles: ['[tuiTitle]:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-typography-ui-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s]{gap:.125rem;font:var(--tui-typography-body-s)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-xs)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m]{gap:.125rem;font:var(--tui-typography-heading-h5)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l]{gap:.5rem;font:var(--tui-typography-heading-h3)}[tuiTitle]:where(*[data-tui-version="5.6.0"])[data-size=l] [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiTitle]:where(*[data-tui-version="5.6.0"]) h1,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h2,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h3,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h4,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h5,[tuiTitle]:where(*[data-tui-version="5.6.0"]) h6{margin:0;font:inherit}[tuiTitle]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{font:var(--tui-typography-ui-s);margin:0}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{margin-inline-end:auto}[tuiButton]:where(*[data-tui-version="5.6.0"]) [tuiTitle] [tuiSubtitle]{color:var(--tui-text-secondary)}\n']
    }]
  }], null, null);
})();
var TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(Styles3);
    this.tuiTitle = input("");
  }
  static {
    this.ɵfac = function TuiTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTitle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTitle,
      selectors: [["", "tuiTitle", ""]],
      hostAttrs: ["data-tui-version", "5.6.0", "tuiTitle", ""],
      hostVars: 1,
      hostBindings: function TuiTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.tuiTitle() || null);
        }
      },
      inputs: {
        tuiTitle: [1, "tuiTitle"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      selector: "[tuiTitle]",
      host: {
        "data-tui-version": TUI_VERSION,
        tuiTitle: "",
        "[attr.data-size]": "tuiTitle() || null"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
function TuiNotificationComponent_ng_container_3_Template(rf, ctx) {
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
function TuiNotificationComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r2, ɵɵsanitizeHtml);
  }
}
function TuiNotificationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function TuiNotificationComponent_Conditional_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.item.$implicit.complete());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r3.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.close(), " ");
  }
}
var ICONS = {
  info: "@tui.info",
  positive: "@tui.circle-check",
  negative: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l",
  data: void 0,
  autoClose: 3e3,
  label: "",
  closable: true,
  block: "start",
  inline: "end"
};
var [TUI_NOTIFICATION_OPTIONS, tuiNotificationOptionsProvider] = tuiCreateOptions(TUI_NOTIFICATION_DEFAULT_OPTIONS);
var TUI_NOTIFICATION_CONCURRENCY = new InjectionToken(ngDevMode ? "TUI_NOTIFICATION_CONCURRENCY" : "", {
  factory: () => 5
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
      exportAs: ["tui-notification-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiNotification]:where(*[data-tui-version="5.6.0"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--tui-text-primary);padding:var(--t-offset) var(--tui-padding-l);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-offset: calc((var(--t-height) - var(--tui-lh)) / 2);--t-height: var(--tui-height-l);--t-start: 0;--t-end: 0}[tuiNotification]:where(*[data-tui-version="5.6.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-icon-start]{--t-start: 2rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-icon-end]{--t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.6.0"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc(var(--t-offset) + var(--tui-lh));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version="5.6.0"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]{padding:var(--t-offset) .5rem;font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]:before{inset-inline-start:-1rem;font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]{padding:var(--t-offset) var(--tui-padding-m);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-m)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start]{--t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{gap:.125rem;font:var(--tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n'],
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
      exportAs: `tui-notification-${TUI_VERSION}`,
      styles: ['[tuiNotification]:where(*[data-tui-version="5.6.0"]){-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font:inherit;line-height:inherit;position:relative;display:flow-root;max-block-size:100%;color:var(--tui-text-primary);padding:var(--t-offset) var(--tui-padding-l);font:var(--tui-typography-body-m);border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-start) solid transparent;border-inline-end:var(--t-end) solid transparent;--t-offset: calc((var(--t-height) - var(--tui-lh)) / 2);--t-height: var(--tui-height-l);--t-start: 0;--t-end: 0}[tuiNotification]:where(*[data-tui-version="5.6.0"]):is(a,button,select,textarea,input,label,.tui-interactive):not(:disabled){cursor:pointer}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-icon-start]{--t-start: 2rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-icon-end]{--t-end: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.6.0"]):before{position:absolute;inset-inline-start:-1rem;inset-block-start:calc(var(--t-offset) + var(--tui-lh));transform:translateY(-100%)}[tuiNotification]:where(*[data-tui-version="5.6.0"]):after{position:absolute;top:50%;transform:translateY(-50%);inset-inline-end:-.5rem;font-size:1rem;margin:0;margin-inline-end:-.25rem;margin-inline-start:auto;color:var(--tui-text-tertiary)!important}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]{padding:var(--t-offset) .5rem;font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s][data-icon-start]{--t-start: 1.5rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]:before{inset-inline-start:-1rem;font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]:after{inset-inline-end:-.875rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] tui-icon{font-size:1rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiTitle]{font:var(--tui-typography-body-s);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=s]>[tuiIconButton]{inset-block-start:0;inset-inline-end:0}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]{padding:var(--t-offset) var(--tui-padding-m);font:var(--tui-typography-body-s);border-radius:var(--tui-radius-m);--t-height: var(--tui-height-m)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m][data-icon-start]{--t-start: 1.625rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]:before{inset-inline-start:-.875rem;font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]:after{inset-inline-end:-.75rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] tui-icon{font-size:1.25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiTitle]{font:var(--tui-typography-ui-m);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]{font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}[tuiNotification]:where(*[data-tui-version="5.6.0"])[data-size=m]>[tuiIconButton]{inset-block-start:.375rem;inset-inline-end:.5rem}[tuiNotification]:where(*[data-tui-version="5.6.0"]) [tuiTitle]{gap:.125rem;font:var(--tui-typography-ui-l);font-weight:700}[tuiNotification]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]{font:var(--tui-typography-body-m)}[tuiNotification]:where(*[data-tui-version="5.6.0"]) [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-block-start:.625rem;font:var(--tui-typography-body-s)}[tuiNotification]:where(*[data-tui-version="5.6.0"])>[tuiIconButton]{position:absolute;inset-block-start:.75rem;inset-inline-end:.75rem;box-shadow:none!important;background:transparent!important}\n']
    }]
  }], null, null);
})();
var TuiNotificationDirective = class _TuiNotificationDirective {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(Styles4);
    this.icons = tuiIconStart(computed((icon = this.icon()) => tuiIsString(icon) ? icon : icon(this.appearance())));
    this.appearance = input(this.options.appearance);
    this.size = input(this.options.size);
    this.icon = input(this.options.icon);
  }
  static {
    this.ɵfac = function TuiNotificationDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNotificationDirective,
      selectors: [["", "tuiNotification", "", 5, "ng-template"]],
      hostVars: 1,
      hostBindings: function TuiNotificationDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        appearance: [1, "appearance"],
        size: [1, "size"],
        icon: [1, "icon"]
      },
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: ""
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiWithIcons, TuiWithAppearance])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiNotification]:not(ng-template)",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: ""
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size()"
      }
    }]
  }], null, null);
})();
var TuiNotificationComponent = class _TuiNotificationComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.close = inject(TUI_CLOSE_WORD);
    this.item = injectContext();
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
  static {
    this.ɵfac = function TuiNotificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNotificationComponent,
      selectors: [["tui-notification-alert"]],
      hostAttrs: ["role", "alert"],
      features: [ɵɵHostDirectivesFeature([TuiAnimated, TuiAlertDirective])],
      decls: 7,
      vars: 9,
      consts: [[1, "t-wrapper"], ["size", "m", "tuiNotification", "", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
      template: function TuiNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
          ɵɵtemplate(3, TuiNotificationComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
          ɵɵelementStart(4, "span", 4);
          ɵɵtemplate(5, TuiNotificationComponent_span_5_Template, 1, 1, "span", 5);
          ɵɵelementEnd()();
          ɵɵconditionalCreate(6, TuiNotificationComponent_Conditional_6_Template, 2, 2, "button", 6);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassProp("t-closable", ctx.item.closable);
          ɵɵproperty("appearance", ctx.item.appearance)("icon", ctx.item.icon);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance();
          ɵɵconditional(ctx.item.closable ? 6 : -1);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiButton, TuiNotificationDirective, TuiTitle],
      styles: ["[_nghost-%COMP%]{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0);filter:drop-shadow(0 .375rem 1rem rgba(0,0,0,.12))}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{margin:.625rem 1rem}.t-wrapper[_ngcontent-%COMP%]{background:var(--tui-background-base);clip-path:inset(.375rem 0 round var(--tui-radius-m))}.t-closable[_ngcontent-%COMP%]{padding-inline-end:2.5rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationComponent, [{
    type: Component,
    args: [{
      selector: "tui-notification-alert",
      imports: [PolymorpheusOutlet, TuiButton, TuiNotificationDirective, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiAnimated, TuiAlertDirective],
      host: {
        role: "alert"
      },
      template: '<div class="t-wrapper">\n    <div\n        size="m"\n        tuiNotification\n        [appearance]="item.appearance"\n        [class.t-closable]="item.closable"\n        [icon]="item.icon"\n    >\n        <span tuiTitle>\n            <ng-container *polymorpheusOutlet="item.label as text; context: item">\n                {{ text }}\n            </ng-container>\n            <span tuiSubtitle>\n                <span\n                    *polymorpheusOutlet="item.content as text; context: item"\n                    [innerHTML]="text"\n                ></span>\n            </span>\n        </span>\n        @if (item.closable) {\n            <button\n                tuiIconButton\n                type="button"\n                [iconStart]="icons.close"\n                (click)="item.$implicit.complete()"\n            >\n                {{ close() }}\n            </button>\n        }\n    </div>\n</div>\n',
      styles: [":host{inline-size:18rem;margin:1.625rem 3rem;word-break:break-word;transform:translateZ(0);filter:drop-shadow(0 .375rem 1rem rgba(0,0,0,.12))}:host :host-context(tui-root._mobile){margin:.625rem 1rem}.t-wrapper{background:var(--tui-background-base);clip-path:inset(.375rem 0 round var(--tui-radius-m))}.t-closable{padding-inline-end:2.5rem}\n"]
    }]
  }], null, null);
})();
var TuiNotificationService = class _TuiNotificationService extends TuiAlertService {
  constructor() {
    super(inject(TUI_NOTIFICATION_CONCURRENCY));
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.component = TuiNotificationComponent;
  }
  static {
    this.ɵfac = function TuiNotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiNotificationService,
      factory: _TuiNotificationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var TuiNotificationTemplate = class _TuiNotificationTemplate {
  constructor() {
    this.tuiNotificationOptions = input({});
  }
  static {
    this.ɵfac = function TuiNotificationTemplate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationTemplate)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNotificationTemplate,
      selectors: [["ng-template", "tuiNotification", ""]],
      inputs: {
        tuiNotificationOptions: [1, "tuiNotificationOptions"]
      },
      features: [ɵɵProvidersFeature([tuiAsPortal(TuiNotificationService)]), ɵɵHostDirectivesFeature([{
        directive: TuiPortalDirective,
        inputs: ["options", "tuiNotificationOptions", "open", "tuiNotification"],
        outputs: ["openChange", "tuiNotificationChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationTemplate, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiNotification]",
      providers: [tuiAsPortal(TuiNotificationService)],
      hostDirectives: [{
        directive: TuiPortalDirective,
        inputs: ["options: tuiNotificationOptions", "open: tuiNotification"],
        outputs: ["openChange: tuiNotificationChange"]
      }]
    }]
  }], null, null);
})();
var TuiNotification = [TuiNotificationDirective, TuiNotificationTemplate];

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = input(inject(TUI_PLATFORM, {
      skipSelf: true
    }));
  }
  static {
    this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPlatform)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPlatform,
      selectors: [["", "tuiPlatform", ""]],
      hostVars: 1,
      hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-platform", ctx.tuiPlatform());
        }
      },
      inputs: {
        tuiPlatform: [1, "tuiPlatform"]
      },
      features: [ɵɵProvidersFeature([{
        provide: TUI_PLATFORM,
        useFactory: () => inject(_TuiPlatform).tuiPlatform()
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform()
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform()"
      }
    }]
  }], null, null);
})();

// node_modules/@ng-web-apis/screen-orientation/fesm2022/ng-web-apis-screen-orientation.mjs
var WaScreenOrientationService = class _WaScreenOrientationService extends Observable {
  win = inject(WA_WINDOW);
  screen = this.win.screen;
  // SSR
  stream$ = (this.screen ? fromEvent(this.screen.orientation, "change").pipe(startWith(null), map(() => (
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     * The type read-only property of the ScreenOrientation interface returns the document's current orientation type,
     * one of "portrait-primary", "portrait-secondary", "landscape-primary", or "landscape-secondary".
     *
     * Browser compatibility:
     * Safari 16.4+, Chrome 38+, Firefox 43+
     */
    this.win.screen.orientation.type
  ))) : fromEvent(this.win, "orientationchange").pipe(startWith(null), map(() => {
    const angle = parseInt(this.win.orientation, 10);
    switch (angle) {
      case -90:
        return "landscape-secondary";
      case 180:
        return "portrait-secondary";
      case 90:
        return "landscape-primary";
      case 0:
      default:
        return "portrait-primary";
    }
  }))).pipe(shareReplay({
    bufferSize: 1,
    refCount: true
  }));
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function WaScreenOrientationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaScreenOrientationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaScreenOrientationService,
    factory: _WaScreenOrientationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaScreenOrientationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var WaViewportService = class _WaViewportService extends Observable {
  visualViewport = inject(WA_WINDOW).visualViewport;
  stream$ = this.visualViewport ? merge(fromEvent(this.visualViewport, "resize"), fromEvent(this.visualViewport, "scroll"), fromEvent(this.visualViewport, "scrollend")).pipe(startWith(null), map(() => this.visualViewport), filter(Boolean), shareReplay({
    bufferSize: 1,
    refCount: true
  })) : EMPTY;
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
  }
  static ɵfac = function WaViewportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaViewportService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WaViewportService,
    factory: _WaViewportService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-visual-viewport.mjs
var TuiVisualViewport = class _TuiVisualViewport {
  constructor() {
    this.w = inject(WA_WINDOW);
    this.style = tuiInjectElement().style;
    this.minInnerHeight = Infinity;
    this.$ = inject(WaViewportService).pipe(takeUntilDestroyed()).subscribe(({
      offsetLeft,
      offsetTop,
      height,
      width,
      scale
    }) => {
      this.minInnerHeight = Math.min(this.minInnerHeight, this.w.innerHeight);
      this.style.setProperty("--tui-viewport-x", tuiPx(offsetLeft));
      this.style.setProperty("--tui-viewport-y", tuiPx(offsetTop));
      this.style.setProperty("--tui-viewport-height", tuiPx(height));
      this.style.setProperty("--tui-viewport-width", tuiPx(width));
      this.style.setProperty("--tui-viewport-scale", String(scale));
      this.style.setProperty("--tui-viewport-vh", tuiPx(this.w.innerHeight / 100));
      this.style.setProperty("--tui-viewport-vw", tuiPx(this.w.innerWidth / 100));
      this.style.setProperty("--tui-viewport-svh", tuiPx(this.minInnerHeight / 100));
    });
  }
  static {
    this.ɵfac = function TuiVisualViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewport)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiVisualViewport,
      selectors: [["", "tuiVisualViewport", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewport, [{
    type: Directive,
    args: [{
      selector: "[tuiVisualViewport]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-root.mjs
var _c08 = ["*", [["tuiOverContent"]]];
var _c12 = ["*", "tuiOverContent"];
function TuiRoot_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 1);
  }
}
function TuiRoot_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TuiRoot_Conditional_2_Conditional_0_Template, 1, 0, "tui-scroll-controls", 1);
    ɵɵelementStart(1, "tui-popups");
    ɵɵprojection(2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.scrollbars ? 0 : -1);
  }
}
var TuiRoot = class _TuiRoot {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.child = !!inject(_TuiRoot, {
      optional: true,
      skipSelf: true
    });
    this.reducedMotion = inject(TUI_REDUCED_MOTION);
    this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
    this.top = signal(this.parent);
    this.breakpoint = inject(TUI_BREAKPOINT);
    this.scrollbars = !inject(WA_IS_MOBILE) && !this.child && inject(TUI_SCROLLBAR_OPTIONS).mode !== "native" && inject(TUI_OPTIONS).scrollbars !== "native";
  }
  get parent() {
    return this.doc.fullscreenElement ? this.doc.fullscreenElement === this.el : !this.child;
  }
  static {
    this.ɵfac = function TuiRoot_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRoot)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRoot,
      selectors: [["tui-root"]],
      hostAttrs: ["data-tui-version", "5.6.0"],
      hostVars: 6,
      hostBindings: function TuiRoot_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("fullscreenchange", function TuiRoot_fullscreenchange_HostBindingHandler() {
            return ctx.top.set(ctx.parent);
          }, ɵɵresolveDocument)("touchstart.passive.zoneless", function TuiRoot_touchstart_passive_zoneless_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--tui-duration", ctx.duration, "ms")("--tui-scroll-behavior", ctx.reducedMotion ? "auto" : "smooth");
          ɵɵclassProp("_mobile", ctx.breakpoint() === "mobile");
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiPlatform, TuiVisualViewport, TuiFontSize])],
      ngContentSelectors: _c12,
      decls: 3,
      vars: 1,
      consts: [[1, "t-root-content"], [1, "t-root-scrollbar"]],
      template: function TuiRoot_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c08);
          ɵɵelementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵconditionalCreate(2, TuiRoot_Conditional_2_Template, 3, 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ctx.top() ? 2 : -1);
        }
      },
      dependencies: [TuiPopups, TuiScrollControls],
      styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-typography-body-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoot, [{
    type: Component,
    args: [{
      selector: "tui-root",
      imports: [TuiPopups, TuiScrollControls],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      hostDirectives: [TuiPlatform, TuiVisualViewport, TuiFontSize],
      host: {
        "data-tui-version": TUI_VERSION,
        "[class._mobile]": 'breakpoint() === "mobile"',
        "[style.--tui-duration.ms]": "duration",
        "[style.--tui-scroll-behavior]": 'reducedMotion ? "auto" : "smooth"',
        "(document:fullscreenchange)": "top.set(parent)",
        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
        "(touchstart.passive.zoneless)": "0"
      },
      template: '<div class="t-root-content">\n    <ng-content />\n</div>\n@if (top()) {\n    @if (scrollbars) {\n        <tui-scroll-controls class="t-root-scrollbar" />\n    }\n    <tui-popups>\n        <ng-content select="tuiOverContent" />\n    </tui-popups>\n}\n',
      styles: ['@keyframes tuiPresent{to{content:""}}@keyframes tuiFade{0%{opacity:0}}@keyframes tuiSlide{0%{transform:var(--tui-from, translateY(100%))}}@keyframes tuiScale{0%{transform:scale(var(--tui-scale, 0))}}@keyframes tuiCollapse{0%{grid-template-rows:0fr}to{grid-template-rows:1fr}}.tui-enter,.tui-leave{animation-duration:var(--tui-duration);animation-timing-function:ease-in-out;pointer-events:none}.tui-leave{animation-direction:reverse}\n', ".tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-typography-body-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;inset:0;z-index:0}.t-root-content{position:relative;inset-block-start:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-hint.mjs
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c09 = ["*"];
function TuiHintComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
var TUI_HINT_COMPONENT = new InjectionToken(ngDevMode ? "TUI_HINT_COMPONENT" : "", {
  factory: () => TuiHintComponent
});
var TuiHintDriver = class _TuiHintDriver extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintDriver_BaseFactory;
      return function TuiHintDriver_Factory(__ngFactoryType__) {
        return (ɵTuiHintDriver_BaseFactory || (ɵTuiHintDriver_BaseFactory = ɵɵgetInheritedFactory(_TuiHintDriver)))(__ngFactoryType__ || _TuiHintDriver);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDriver,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriver, [{
    type: Directive
  }], null, null);
})();
var TUI_HINT_DIRECTIONS = ["bottom-start", "bottom", "bottom-end", "top-start", "top", "top-end", "start-top", "start", "start-bottom", "end-top", "end", "end-bottom"];
var TUI_HINT_DEFAULT_OPTIONS = {
  direction: "bottom-start",
  showDelay: 500,
  hideDelay: 200,
  appearance: "",
  /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
  icon: "@tui.circle-help"
};
var TUI_HINT_OPTIONS = new InjectionToken(ngDevMode ? "TUI_HINT_OPTIONS" : "", {
  factory: () => TUI_HINT_DEFAULT_OPTIONS
});
var tuiHintOptionsProvider = (override) => ({
  provide: TUI_HINT_OPTIONS,
  deps: [[new Optional(), new SkipSelf(), TUI_HINT_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS)
});
var TuiHintHover = class _TuiHintHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.isMobile = inject(WA_IS_MOBILE);
    this.el = tuiInjectElement();
    this.hovered$ = inject(TuiHoveredService);
    this.options = inject(TUI_HINT_OPTIONS);
    this.visible = false;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$.pipe(switchMap((show) => this.isMobile ? of(show).pipe(delay(0)) : of(show).pipe(delay(show ? 0 : this.hideDelay()))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((show) => this.isMobile ? of(show).pipe(delay(0)) : of(show).pipe(delay(show ? this.showDelay() : this.hideDelay()))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && (this.el.hasAttribute("tuiHintPointer") || !tuiIsObscured(this.el))), tap((visible) => {
      this.visible = visible;
    }));
    this.parent = inject(_TuiHintHover, {
      optional: true,
      skipSelf: true
    });
    this.showDelay = input(this.options.showDelay, {
      alias: "tuiHintShowDelay"
    });
    this.hideDelay = input(this.options.hideDelay, {
      alias: "tuiHintHideDelay"
    });
    this.type = "hint";
    this.enabled = true;
  }
  toggle(visible = !this.visible) {
    this.toggle$.next(visible);
    this.parent?.toggle(visible);
  }
  close() {
    this.toggle$.next(false);
  }
  static {
    this.ɵfac = function TuiHintHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHover,
      inputs: {
        showDelay: [1, "tuiHintShowDelay", "showDelay"],
        hideDelay: [1, "tuiHintHideDelay", "hideDelay"]
      },
      exportAs: ["tuiHintHover"],
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintHover), TuiHoveredService]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHover, [{
    type: Directive,
    args: [{
      providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
      exportAs: "tuiHintHover"
    }]
  }], () => [], null);
})();
var GAP$1 = 8;
var ARROW_OFFSET = 24;
var TOP = 1;
var LEFT = 0;
var TuiHintPosition = class _TuiHintPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.el = tuiInjectElement();
    this.viewport = inject(TUI_VIEWPORT);
    this.directionChange = new Subject();
    this.accessor = tuiFallbackAccessor("hint")(inject(TuiRectAccessor, {
      optional: true
    }), {
      getClientRect: () => this.el.getBoundingClientRect()
    });
    this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => __spreadProps(__spreadValues({}, acc), {
      [direction]: [0, 0]
    }), {});
    this.direction = input(inject(TUI_HINT_OPTIONS).direction, {
      alias: "tuiHintDirection"
    });
    this.offset = input(inject(WA_IS_MOBILE) ? 16 : 8, {
      alias: "tuiHintOffset"
    });
    this.tuiHintDirectionChange = outputFromObservable(this.directionChange.pipe(distinctUntilChanged()));
    this.type = "hint";
  }
  getPosition({
    width,
    height
  }) {
    const direction = this.direction();
    const hostRect = this.accessor.getClientRect();
    const leftCenter = hostRect.left + hostRect.width / 2;
    const topCenter = hostRect.top + hostRect.height / 2;
    const rtl = this.el.matches('[dir="rtl"] :scope');
    this.points["top-start"][TOP] = hostRect.top - height - this.offset();
    this.points["top-start"][LEFT] = leftCenter - width + ARROW_OFFSET;
    this.points.top[TOP] = this.points["top-start"][TOP];
    this.points.top[LEFT] = leftCenter - width / 2;
    this.points["top-end"][TOP] = this.points["top-start"][TOP];
    this.points["top-end"][LEFT] = leftCenter - ARROW_OFFSET;
    this.points["bottom-start"][TOP] = hostRect.bottom + this.offset();
    this.points["bottom-start"][LEFT] = this.points["top-start"][LEFT];
    this.points.bottom[TOP] = this.points["bottom-start"][TOP];
    this.points.bottom[LEFT] = this.points.top[LEFT];
    this.points["bottom-end"][TOP] = this.points["bottom-start"][TOP];
    this.points["bottom-end"][LEFT] = this.points["top-end"][LEFT];
    this.points["start-top"][TOP] = topCenter - height + ARROW_OFFSET;
    this.points["start-top"][LEFT] = hostRect.left - width - this.offset();
    this.points.start[TOP] = topCenter - height / 2;
    this.points.start[LEFT] = this.points["start-top"][LEFT];
    this.points["start-bottom"][TOP] = topCenter - ARROW_OFFSET;
    this.points["start-bottom"][LEFT] = this.points["start-top"][LEFT];
    this.points["end-top"][TOP] = this.points["start-top"][TOP];
    this.points["end-top"][LEFT] = hostRect.right + this.offset();
    this.points.end[TOP] = this.points.start[TOP];
    this.points.end[LEFT] = this.points["end-top"][LEFT];
    this.points["end-bottom"][TOP] = this.points["start-bottom"][TOP];
    this.points["end-bottom"][LEFT] = this.points["end-top"][LEFT];
    const array = Array.isArray(direction) ? direction : [direction];
    const priority = array.map((direction2) => adjust(direction2, rtl));
    const updated = priority.concat(TUI_HINT_DIRECTIONS).find((dir) => this.checkPosition(this.points[dir], width, height)) || this.fallback;
    this.directionChange.next(adjust(updated, rtl));
    return this.points[updated];
  }
  get fallback() {
    return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
  }
  checkPosition([left, top], width, height) {
    const viewport = this.viewport.getClientRect();
    return top > viewport.top + GAP$1 && left > viewport.left + GAP$1 && top + height < viewport.bottom - GAP$1 && left + width < viewport.right - GAP$1;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPosition_BaseFactory;
      return function TuiHintPosition_Factory(__ngFactoryType__) {
        return (ɵTuiHintPosition_BaseFactory || (ɵTuiHintPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPosition)))(__ngFactoryType__ || _TuiHintPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPosition,
      inputs: {
        direction: [1, "tuiHintDirection", "direction"],
        offset: [1, "tuiHintOffset", "offset"]
      },
      outputs: {
        tuiHintDirectionChange: "tuiHintDirectionChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPosition, [{
    type: Directive
  }], null, null);
})();
function adjust(direction, rtl) {
  if (rtl && direction.includes("left")) {
    return direction.replace("left", "right");
  }
  return rtl && direction.includes("right") ? direction.replace("right", "left") : direction;
}
var TuiHintDirective = class _TuiHintDirective {
  constructor() {
    this.service = inject(TuiPopupService);
    this.content = input(null, {
      alias: "tuiHint"
    });
    this.context = input(void 0, {
      alias: "tuiHintContext"
    });
    this.appearance = input(inject(TUI_HINT_OPTIONS).appearance, {
      alias: "tuiHintAppearance"
    });
    this.visible = output({
      alias: "tuiHintVisible"
    });
    this.component = inject(PolymorpheusComponent);
    this.el = tuiInjectElement();
    this.type = "hint";
  }
  ngOnChanges() {
    if (!this.content()) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    if (show && this.content() && !this.ref) {
      this.ref = this.service.add(this.component);
      this.visible.emit(true);
    } else if (this.ref) {
      this.ref.destroy();
      this.ref = void 0;
      this.visible.emit(false);
    }
  }
  static {
    this.ɵfac = function TuiHintDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDirective,
      selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
      inputs: {
        content: [1, "tuiHint", "content"],
        context: [1, "tuiHintContext", "context"],
        appearance: [1, "tuiHintAppearance", "appearance"]
      },
      outputs: {
        visible: "tuiHintVisible"
      },
      features: [ɵɵProvidersFeature([tuiAsVehicle(_TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }]), ɵɵHostDirectivesFeature([TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection", "tuiHintDirection", "tuiHintOffset", "tuiHintOffset"],
        outputs: ["tuiHintDirectionChange", "tuiHintDirectionChange"]
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
    type: Directive,
    args: [{
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsVehicle(TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }],
      hostDirectives: [TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection", "tuiHintOffset"],
        outputs: ["tuiHintDirectionChange"]
      }]
    }]
  }], null, null);
})();
var TuiHintPointer = class _TuiHintPointer extends TuiHintHover {
  constructor() {
    super(...arguments);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  getClientRect() {
    return this.currentRect;
  }
  onMove({
    clientX,
    clientY
  }) {
    this.currentRect = tuiPointToClientRect(clientX, clientY);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPointer_BaseFactory;
      return function TuiHintPointer_Factory(__ngFactoryType__) {
        return (ɵTuiHintPointer_BaseFactory || (ɵTuiHintPointer_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPointer)))(__ngFactoryType__ || _TuiHintPointer);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPointer,
      selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
      hostBindings: function TuiHintPointer_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.zoneless", function TuiHintPointer_mousemove_zoneless_HostBindingHandler($event) {
            return ctx.onMove($event);
          });
        }
      },
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintPointer), tuiAsDriver(_TuiHintPointer)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointer, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintPointer]",
      providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
      host: {
        "(mousemove.zoneless)": "onMove($event)"
      }
    }]
  }], null, null);
})();
var TuiHintUnstyledComponent = class _TuiHintUnstyledComponent {
  constructor() {
    this.hint = inject(TuiHintDirective);
  }
  static {
    this.ɵfac = function TuiHintUnstyledComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyledComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintUnstyledComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 1,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiHintUnstyledComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.hint.content());
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
    type: Component,
    args: [{
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="hint.content()" />',
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var TuiHintUnstyled = class _TuiHintUnstyled {
  constructor() {
    const hint = inject(TuiHintDirective);
    tuiSetSignal(hint.content, inject(TemplateRef));
    hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent, inject(INJECTOR$1));
  }
  static {
    this.ɵfac = function TuiHintUnstyled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyled)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintUnstyled,
      selectors: [["ng-template", "tuiHint", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyled, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiHint]"
    }]
  }], () => [], null);
})();
var TUI_HINT_PROVIDERS = [TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint", TuiHintPosition), tuiRectAccessorFor("hint", forwardRef(() => TuiHintDirective))];
var GAP = 8;
var TuiHintComponent = class _TuiHintComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.hover = inject(TuiHintHover);
    this.vvs = inject(TuiVisualViewportService);
    this.viewport = inject(TUI_VIEWPORT);
    this.pointer = inject(TuiHintPointer, {
      optional: true
    });
    this.accessor = inject(TuiRectAccessor);
    this.hint = inject(TuiHintDirective);
    this.isMobile = inject(WA_IS_MOBILE);
    this.content = this.hint.component.component === TuiHintUnstyledComponent ? signal("") : this.hint.content;
    this.theme = this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    this.appearance = tuiAppearance(this.hint.appearance);
    inject(TuiPositionService).pipe(takeWhile(() => this.hint.el.isConnected), map((point) => this.vvs.correct(point)), takeUntilDestroyed()).subscribe({
      next: (point) => this.update(...point),
      complete: () => this.hover.close()
    });
    inject(TuiHoveredService).pipe(takeUntilDestroyed()).subscribe((hover) => this.hover.toggle(hover));
  }
  onClick(target) {
    if (!target.closest(this.el.tagName) && !this.hint.el.contains(target) || tuiIsObscured(this.hint.el)) {
      this.hover.toggle(false);
    }
  }
  apply(top, left, beakTop, beakLeft) {
    this.el.style.setProperty("top", top);
    this.el.style.setProperty("left", left);
    this.el.style.setProperty("--t-top", `${beakTop}%`);
    this.el.style.setProperty("--t-left", `${beakLeft}%`);
    this.el.style.setProperty("--t-rotate", !beakLeft || Math.ceil(beakLeft) === 100 ? "90deg" : "0deg");
  }
  update(left, top) {
    const {
      clientHeight,
      clientWidth
    } = this.el;
    const rect = this.accessor.getClientRect();
    if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
      return;
    }
    const viewport = this.viewport.getClientRect();
    const safeLeft = tuiClamp(Math.max(GAP, left), viewport.left + GAP, Math.max(GAP, viewport.width + viewport.left - clientWidth - GAP));
    const [beakTop, beakLeft] = this.vvs.correct([rect.top + rect.height / 2 - top, rect.left + rect.width / 2 - safeLeft]);
    this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(safeLeft)), Math.round(tuiClamp(beakTop, 0, clientHeight) / clientHeight * 100), Math.round(tuiClamp(beakLeft, 0, clientWidth) / clientWidth * 100));
  }
  static {
    this.ɵfac = function TuiHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintComponent,
      selectors: [["tui-hint"]],
      hostAttrs: ["role", "tooltip"],
      hostVars: 5,
      hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵattribute("tuiTheme", ctx.theme);
          ɵɵclassProp("_mobile", ctx.isMobile)("_untouchable", ctx.pointer);
        }
      },
      features: [ɵɵProvidersFeature([TUI_HINT_PROVIDERS, tuiButtonOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiAppearance, TuiAnimated, TuiActiveZone])],
      ngContentSelectors: _c09,
      decls: 2,
      vars: 2,
      consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
      template: function TuiHintComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.hint.context());
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: [`[_nghost-%COMP%]{position:absolute;max-inline-size:min(20rem,calc(100% - 1rem));padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-typography-body-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--t-left) var(--t-top);--tui-background-elevation-2: var(--tui-background-elevation-3)}.tui-enter[_nghost-%COMP%], .tui-leave[_nghost-%COMP%]{animation-name:tuiFade}[_nghost-%COMP%]   tui-root._mobile.tui-enter[_nghost-%COMP%], tui-root._mobile   .tui-enter[_nghost-%COMP%]{animation:tuiFade var(--tui-duration) ease-in-out,tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}[_nghost-%COMP%]   tui-root._mobile.tui-leave[_nghost-%COMP%], tui-root._mobile   .tui-leave[_nghost-%COMP%]{animation:tuiFade var(--tui-duration) ease-in-out reverse,tuiScale var(--tui-duration) ease-in-out reverse}[_nghost-%COMP%]:before{content:"";position:absolute;inset-block-start:var(--t-top);inset-inline-start:var(--t-left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transition:none;transform:translate(-50%,-50%) rotate(var(--t-rotate))}._mobile[_nghost-%COMP%]{font:var(--tui-typography-body-m)}._mobile[_nghost-%COMP%]:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]     [tuiTitle]{margin-block-end:.75rem}[_nghost-%COMP%]     [tuiTitle]+footer{margin-block-start:.75rem}[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:right;margin-inline-end:-.25rem}@supports (float: inline-end){[_nghost-%COMP%]     [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end}}[_nghost-%COMP%]     img{display:block;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]     footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;max-inline-size:100%;margin:1rem 0 .25rem}`],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
    type: Component,
    args: [{
      selector: "tui-hint",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context()"
            [innerHTML]="text"
        ></span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_HINT_PROVIDERS, tuiButtonOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiAppearance, TuiAnimated, TuiActiveZone],
      host: {
        role: "tooltip",
        "[attr.tuiTheme]": "theme",
        "[class._mobile]": "isMobile",
        "[class._untouchable]": "pointer",
        "(document:click)": "onClick($event.target)"
      },
      styles: [`:host{position:absolute;max-inline-size:min(20rem,calc(100% - 1rem));padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-typography-body-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--t-left) var(--t-top);--tui-background-elevation-2: var(--tui-background-elevation-3)}:host.tui-enter,:host.tui-leave{animation-name:tuiFade}:host :host-context(tui-root._mobile).tui-enter{animation:tuiFade var(--tui-duration) ease-in-out,tuiScale var(--tui-duration) cubic-bezier(.34,1.56,.64,1)}:host :host-context(tui-root._mobile).tui-leave{animation:tuiFade var(--tui-duration) ease-in-out reverse,tuiScale var(--tui-duration) ease-in-out reverse}:host:before{content:"";position:absolute;inset-block-start:var(--t-top);inset-inline-start:var(--t-left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transition:none;transform:translate(-50%,-50%) rotate(var(--t-rotate))}:host._mobile{font:var(--tui-typography-body-m)}:host._mobile:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}:host ::ng-deep [tuiTitle]{margin-block-end:.75rem}:host ::ng-deep [tuiTitle]+footer{margin-block-start:.75rem}:host ::ng-deep [tuiIconButton][data-appearance=icon][data-size=xs]{float:right;margin-inline-end:-.25rem}@supports (float: inline-end){:host ::ng-deep [tuiIconButton][data-appearance=icon][data-size=xs]{float:inline-end}}:host ::ng-deep img{display:block;border-radius:var(--tui-radius-m)}:host ::ng-deep footer{display:flex;justify-content:flex-end;gap:.5rem;inline-size:18rem;max-inline-size:100%;margin:1rem 0 .25rem}
`]
    }]
  }], () => [], null);
})();
var TuiHintDescribe = class _TuiHintDescribe extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.element = computed((id = this.id()) => id ? this.doc.querySelector(`#${id}`) || this.el : this.el);
    this.id = input("", {
      alias: "tuiHintDescribe"
    });
    this.type = "hint";
    this.stream$ = toObservable(this.id).pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, "keydown", {
      capture: true
    }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element(), "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
  }
  get focused() {
    return tuiIsFocused(this.element());
  }
  static {
    this.ɵfac = function TuiHintDescribe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDescribe)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDescribe,
      selectors: [["", "tuiHintDescribe", ""]],
      inputs: {
        id: [1, "tuiHintDescribe", "id"]
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintDescribe)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribe, [{
    type: Directive,
    args: [{
      selector: "[tuiHintDescribe]",
      providers: [tuiAsDriver(TuiHintDescribe)]
    }]
  }], () => [], null);
})();
var TuiHintHost = class _TuiHintHost extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.tuiHintHost = input();
    this.type = "hint";
  }
  getClientRect() {
    return this.tuiHintHost()?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintHost_BaseFactory;
      return function TuiHintHost_Factory(__ngFactoryType__) {
        return (ɵTuiHintHost_BaseFactory || (ɵTuiHintHost_BaseFactory = ɵɵgetInheritedFactory(_TuiHintHost)))(__ngFactoryType__ || _TuiHintHost);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHost,
      selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
      inputs: {
        tuiHintHost: [1, "tuiHintHost"]
      },
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintHost)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHost, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintHost]",
      providers: [tuiAsRectAccessor(TuiHintHost)]
    }]
  }], null, null);
})();
var TuiHintManual = class _TuiHintManual extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hover = inject(TuiHintHover);
    this.stream$ = new BehaviorSubject(false);
    this.visible = input(false, {
      alias: "tuiHintManual"
    });
    this.type = "hint";
    this.hover.enabled = false;
  }
  ngOnChanges() {
    this.stream$.next(!!this.visible());
    this.hover.enabled = this.visible() === null;
  }
  static {
    this.ɵfac = function TuiHintManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintManual,
      selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
      inputs: {
        visible: [1, "tuiHintManual", "visible"]
      },
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintManual)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManual, [{
    type: Directive,
    args: [{
      selector: "[tuiHint][tuiHintManual]",
      providers: [tuiAsDriver(TuiHintManual)]
    }]
  }], () => [], null);
})();
var TuiHintOverflow = class _TuiHintOverflow {
  constructor() {
    this.hint = inject(TuiHintDirective);
    this.content = input("", {
      alias: "tuiHintOverflow"
    });
  }
  onMouseEnter({
    scrollWidth,
    clientWidth,
    textContent
  }) {
    const content = this.content();
    tuiSetSignal(this.hint.content, scrollWidth > clientWidth && content !== null ? content || textContent : "");
  }
  static {
    this.ɵfac = function TuiHintOverflow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOverflow)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOverflow,
      selectors: [["", "tuiHintOverflow", ""]],
      hostBindings: function TuiHintOverflow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function TuiHintOverflow_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter($event.currentTarget);
          });
        }
      },
      inputs: {
        content: [1, "tuiHintOverflow", "content"]
      },
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOverflow, [{
    type: Directive,
    args: [{
      selector: "[tuiHintOverflow]",
      hostDirectives: [{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance"]
      }],
      host: {
        "(mouseenter)": "onMouseEnter($event.currentTarget)"
      }
    }]
  }], null, null);
})();
var TuiHint = [TuiHintComponent, TuiHintDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-slider.mjs
var _c010 = ["type", "range", "tuiSlider", ""];
var _c13 = ["tuiSliderThumbLabel", ""];
var _c22 = ["*", [["input", "type", "range"]]];
var _c32 = ["*", "input[type=range]"];
function TuiSliderThumbLabel_Conditional_0_Template(rf, ctx) {
}
var TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
  const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
  const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
  const upperStep = keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1] || [0, 0];
  return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
  const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
  const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
  return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
  const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
  return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
function tuiCreateKeyStepsTransformer(keySteps) {
  return new class {
    fromControlValue(controlValue) {
      return tuiKeyStepValueToPercentage(controlValue, keySteps) / 100;
    }
    toControlValue(ratio) {
      return tuiPercentageToKeyStepValue(ratio * 100, keySteps);
    }
  }();
}
var TuiSliderComponent = class _TuiSliderComponent {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.ticksGradient = computed((segments = this.segments()) => this.getTicksGradient(segments));
    this.segments = input([1], {
      alias: "segments",
      transform: (x) => tuiIsNumber(x) ? Array.from({
        length: x
      }, (_, i) => i / x) : x
    });
    this.el = tuiInjectElement();
    this.keySteps = inject(TuiSliderKeyStepsBase, {
      self: true,
      optional: true
    });
    if (this.control instanceof NgModel) {
      this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
    }
  }
  get valueRatio() {
    return (this.value - this.min) / (this.max - this.min) || 0;
  }
  get min() {
    return Number(this.el.min);
  }
  set min(x) {
    this.el.min = String(x);
  }
  get max() {
    return Number(this.el.max || 100);
  }
  set max(x) {
    this.el.max = String(x);
  }
  get step() {
    if (!this.el.step) {
      return 1;
    }
    return this.el.step === "any" ? 0 : Number(this.el.step);
  }
  set step(x) {
    this.el.step = String(x);
  }
  get value() {
    if (this.control instanceof NgModel) {
      const transformer = this.keySteps?.transformer();
      const value = this.keySteps && transformer ? this.keySteps.toSliderValue(transformer.fromControlValue(this.control.value)) : this.control.viewModel;
      return this.step ? tuiRound(Math.round(value / this.step) * this.step, TUI_FLOATING_PRECISION) : value;
    }
    return Number(this.el.value) || 0;
  }
  set value(newValue) {
    this.el.value = `${newValue}`;
  }
  getTicksGradient(segments) {
    if (segments.length <= 1) {
      return "linear-gradient(to right, transparent 0 100%)";
    }
    const percentages = segments.filter((segment) => segment > 0 && segment < 1).map((segment) => segment * 100);
    return percentages.reduce((acc, segment, index) => `${acc}
                var(--tui-text-tertiary) ${segment}% calc(${segment}% + var(--t-tick-thickness)),
                transparent ${segment}% ${percentages[index + 1] ?? 100}%${percentages[index + 1] ? "," : ")"}
                `, `linear-gradient(to right, transparent 0 ${percentages[0]}%,`);
  }
  static {
    this.ɵfac = function TuiSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderComponent,
      selectors: [["input", "type", "range", "tuiSlider", ""]],
      hostVars: 4,
      hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSliderComponent_input_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--tui-slider-fill-ratio", ctx.valueRatio)("--tui-ticks-gradient", ctx.ticksGradient());
        }
      },
      inputs: {
        segments: [1, "segments"]
      },
      features: [ɵɵProvidersFeature([tuiAsAuxiliary(_TuiSliderComponent)])],
      attrs: _c010,
      decls: 0,
      vars: 0,
      template: function TuiSliderComponent_Template(rf, ctx) {
      },
      styles: ['[_nghost-%COMP%]{--t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:max(var(--tui-thumb-size, .75rem),1rem);padding:calc((max(var(--tui-thumb-size, .75rem),1rem) - max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem))/2) 0;box-sizing:border-box;outline:none;border-radius:1rem/3rem;background:var(--tui-ticks-gradient) no-repeat calc((var(--tui-thumb-size, .75rem) - var(--t-tick-thickness)) / 2) / calc(100% - var(--tui-thumb-size, .75rem)),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio))),var(--tui-background-neutral-2);background-clip:content-box}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[_nghost-%COMP%]:before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;inset-block-start:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2);inset-inline-start:var(--t-left);inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));background:currentColor;opacity:0;--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * var(--tui-thumb-size, .75rem))}[_nghost-%COMP%]:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]:focus-visible::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]::-webkit-slider-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}[_nghost-%COMP%]::-moz-range-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}[_nghost-%COMP%]::-moz-range-progress{opacity:0}tui-textfield   [type="range"][_nghost-%COMP%]{position:absolute;inset:100% var(--t-padding) 0;inline-size:auto;margin:calc(-.5*max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem)) 0 0;transform:translateY(-50%);background-color:transparent;pointer-events:auto}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderComponent, [{
    type: Component,
    args: [{
      selector: "input[type=range][tuiSlider]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsAuxiliary(TuiSliderComponent)],
      host: {
        "[style.--tui-slider-fill-ratio]": "valueRatio",
        "[style.--tui-ticks-gradient]": "ticksGradient()",
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        "(input)": "0"
      },
      styles: [':host{--t-tick-thickness: .25rem;position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:max(var(--tui-thumb-size, .75rem),1rem);padding:calc((max(var(--tui-thumb-size, .75rem),1rem) - max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem))/2) 0;box-sizing:border-box;outline:none;border-radius:1rem/3rem;background:var(--tui-ticks-gradient) no-repeat calc((var(--tui-thumb-size, .75rem) - var(--t-tick-thickness)) / 2) / calc(100% - var(--tui-thumb-size, .75rem)),linear-gradient(to var(--tui-inline-end),currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio))),var(--tui-background-neutral-2);background-clip:content-box}:host:active{cursor:ew-resize}:host:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host:before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;inset-block-start:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2);inset-inline-start:var(--t-left);inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));background:currentColor;opacity:0;--t-left: calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * var(--tui-thumb-size, .75rem))}:host:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host:focus-visible::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-webkit-slider-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host::-webkit-slider-thumb:hover,:active:not(:disabled):host::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:host::-moz-range-thumb{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:var(--tui-thumb-size, .75rem);inline-size:var(--tui-thumb-size, .75rem);box-sizing:content-box;background-clip:content-box;border:calc(max(calc(1rem - var(--tui-thumb-size, .75rem)),0rem)/2) solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host::-moz-range-thumb:hover,:active:not(:disabled):host::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:host::-moz-range-progress{opacity:0}:host-context(tui-textfield) :host([type="range"]){position:absolute;inset:100% var(--t-padding) 0;inline-size:auto;margin:calc(-.5*max(calc(calc(var(--tui-thumb-size, .75rem) / 2) - .25rem),.125rem)) 0 0;transform:translateY(-50%);background-color:transparent;pointer-events:auto}\n']
    }]
  }], () => [], null);
})();
var TuiSliderKeyStepsBase = class _TuiSliderKeyStepsBase {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.min = signal(void 0);
    this.max = signal(void 0);
    this.sync = effect(() => {
      const steps = this.keySteps();
      this.transformer.set(steps && tuiCreateKeyStepsTransformer(steps));
      this.min.set(steps?.[0][1]);
      this.max.set(steps?.[steps.length - 1]?.[1]);
    });
    this.step = input(1);
    this.keySteps = input();
    this.transformer = signal(void 0);
    this.controlValue = toSignal(timer(0).pipe(switchMap(() => tuiControlValue(this.control))));
    this.totalSteps = computed(() => (
      /**
       * Not-integer amount of steps is invalid usage of native sliders
       * ```html
       * <input type="range" [max]="100" [step]="3.33" />
       * ```
       * (impossible to select 100; 99.9 is max allowed value)
       */
      Math.round(100 / this.step())
    ));
  }
  ngOnInit() {
    this.slider = this.injector.get(TuiSliderComponent);
  }
  takeStep(coefficient) {
    const newValue = this.slider.value + coefficient;
    return this.transformer()?.toControlValue((this.slider.value + coefficient) / this.totalSteps()) ?? newValue;
  }
  toSliderValue(fraction) {
    return this.transformer() ? fraction * this.totalSteps() : fraction;
  }
  setControlValue(controlValue) {
    const fraction = this.transformer()?.fromControlValue(controlValue) ?? controlValue;
    this.slider.value = this.toSliderValue(fraction);
  }
  getControlValue() {
    const {
      value
    } = this.slider;
    return this.transformer()?.toControlValue(value / this.totalSteps()) ?? value;
  }
  static {
    this.ɵfac = function TuiSliderKeyStepsBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderKeyStepsBase)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeyStepsBase,
      selectors: [["input", "tuiSlider", "", "keySteps", ""]],
      hostVars: 6,
      hostBindings: function TuiSliderKeyStepsBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-valuemax", ctx.max())("aria-valuemin", ctx.min())("aria-valuenow", ctx.controlValue())("max", ctx.transformer() ? ctx.totalSteps() : ctx.slider == null ? null : ctx.slider.max)("min", ctx.transformer() ? 0 : ctx.slider == null ? null : ctx.slider.min)("step", ctx.transformer() ? 1 : ctx.step());
        }
      },
      inputs: {
        step: [1, "step"],
        keySteps: [1, "keySteps"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeyStepsBase, [{
    type: Directive,
    args: [{
      selector: "input[tuiSlider][keySteps]",
      host: {
        "[attr.aria-valuemax]": "max()",
        "[attr.aria-valuemin]": "min()",
        "[attr.aria-valuenow]": "controlValue()",
        "[attr.max]": "transformer() ? totalSteps() : slider?.max",
        "[attr.min]": "transformer() ? 0 : slider?.min",
        "[attr.step]": "transformer() ? 1 : step()"
      }
    }]
  }], null, null);
})();
var TuiSliderKeySteps = class _TuiSliderKeySteps extends TuiControl {
  constructor() {
    super(...arguments);
    this.base = inject(TuiSliderKeyStepsBase);
  }
  set keySteps(steps) {
    this.transformer = steps ? tuiCreateKeyStepsTransformer(steps) : TUI_IDENTITY_VALUE_TRANSFORMER;
  }
  setValue(sliderValue) {
    this.onChange(this.base.transformer() ? sliderValue / this.base.totalSteps() : sliderValue);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSliderKeySteps_BaseFactory;
      return function TuiSliderKeySteps_Factory(__ngFactoryType__) {
        return (ɵTuiSliderKeySteps_BaseFactory || (ɵTuiSliderKeySteps_BaseFactory = ɵɵgetInheritedFactory(_TuiSliderKeySteps)))(__ngFactoryType__ || _TuiSliderKeySteps);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeySteps,
      selectors: [["input", "tuiSlider", "", "keySteps", "", "ngModel", ""], ["input", "tuiSlider", "", "keySteps", "", "formControl", ""], ["input", "tuiSlider", "", "keySteps", "", "formControlName", ""]],
      hostVars: 2,
      hostBindings: function TuiSliderKeySteps_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function TuiSliderKeySteps_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("change", function TuiSliderKeySteps_change_HostBindingHandler($event) {
            return ctx.setValue($event.target.value);
          })("input", function TuiSliderKeySteps_input_HostBindingHandler($event) {
            return ctx.setValue($event.target.value);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.disabled())("value", ctx.base.toSliderValue(ctx.value()));
        }
      },
      inputs: {
        keySteps: "keySteps"
      },
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider(0)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeySteps, [{
    type: Directive,
    args: [{
      selector: "input[tuiSlider][keySteps][ngModel],input[tuiSlider][keySteps][formControl],input[tuiSlider][keySteps][formControlName]",
      inputs: ["keySteps"],
      providers: [tuiFallbackValueProvider(0)],
      host: {
        "[disabled]": "disabled()",
        "[value]": "base.toSliderValue(value())",
        "(blur)": "onTouched()",
        "(change)": "setValue($event.target.value)",
        "(input)": "setValue($event.target.value)"
      }
    }]
  }], null, null);
})();
var SLIDER_INTERACTION_KEYS = /* @__PURE__ */ new Set(["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"]);
var TuiSliderReadonly = class _TuiSliderReadonly {
  constructor() {
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.readonly = input(true, {
      transform: coerceBooleanProperty
    });
    const touchStart$ = tuiTypedFromEvent(this.el, "touchstart", {
      passive: false
    });
    const touchMove$ = tuiTypedFromEvent(this.doc, "touchmove", {
      passive: false
    });
    const touchEnd$ = tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    });
    const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
    combineLatest([touchMove$, shouldPreventMove$]).pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed()).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
  }
  preventEvent(event) {
    if (event.cancelable && this.readonly()) {
      event.preventDefault();
    }
  }
  preventKeyboardInteraction(event) {
    if (SLIDER_INTERACTION_KEYS.has(event.key)) {
      this.preventEvent(event);
    }
  }
  static {
    this.ɵfac = function TuiSliderReadonly_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderReadonly)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderReadonly,
      selectors: [["input", "tuiSlider", "", "readonly", ""]],
      hostBindings: function TuiSliderReadonly_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function TuiSliderReadonly_keydown_HostBindingHandler($event) {
            return ctx.preventKeyboardInteraction($event);
          })("mousedown", function TuiSliderReadonly_mousedown_HostBindingHandler($event) {
            return ctx.preventEvent($event);
          });
        }
      },
      inputs: {
        readonly: [1, "readonly"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderReadonly, [{
    type: Directive,
    args: [{
      selector: "input[tuiSlider][readonly]",
      host: {
        "(keydown)": "preventKeyboardInteraction($event)",
        "(mousedown)": "preventEvent($event)"
      }
    }]
  }], () => [], null);
})();
var TuiSliderThumbLabel = class _TuiSliderThumbLabel {
  constructor() {
    this.slider = contentChild(TuiSliderComponent);
    this.control = contentChild(NgControl);
  }
  ngAfterContentInit() {
    ngDevMode && console.assert(Boolean(this.control()?.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName for correct work.');
  }
  get ratio() {
    return this.slider()?.valueRatio || 0;
  }
  get ghostStart() {
    return this.ratio * (this.slider()?.el.offsetWidth || 0);
  }
  static {
    this.ɵfac = function TuiSliderThumbLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderThumbLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderThumbLabel,
      selectors: [["", "tuiSliderThumbLabel", ""]],
      contentQueries: function TuiSliderThumbLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.slider, TuiSliderComponent, 5)(dirIndex, ctx.control, NgControl, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      features: [ɵɵProvidersFeature([tuiHintOptionsProvider({
        direction: "top",
        appearance: "floating"
      })])],
      attrs: _c13,
      ngContentSelectors: _c32,
      decls: 5,
      vars: 7,
      consts: [[1, "t-ghost"]],
      template: function TuiSliderThumbLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c22);
          ɵɵconditionalCreate(0, TuiSliderThumbLabel_Conditional_0_Template, 0, 0);
          ɵɵpipe(1, "async");
          ɵɵdomElementStart(2, "div", 0);
          ɵɵprojection(3);
          ɵɵdomElementEnd();
          ɵɵprojection(4, 1);
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵconditional(ɵɵpipeBind1(1, 5, (tmp_0_0 = ctx.control()) == null ? null : tmp_0_0.valueChanges) ? 0 : -1);
          ɵɵadvance(2);
          ɵɵstyleProp("--tui-slider-thumb-ratio", ctx.ratio)("inset-inline-start", ctx.ghostStart, "px");
        }
      },
      dependencies: [AsyncPipe],
      styles: ['[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;inset-block:0;margin:auto;border-radius:50%;pointer-events:none;inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);transform:translate(calc(var(--tui-slider-thumb-ratio) * var(--tui-thumb-size, .75rem) * -1 * var(--tui-inline)))}[dir="rtl"][_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%], [dir="rtl"]   [_nghost-%COMP%]   .t-ghost[_ngcontent-%COMP%]{inset-inline-start:unset!important}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderThumbLabel, [{
    type: Component,
    args: [{
      selector: "[tuiSliderThumbLabel]",
      imports: [AsyncPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiHintOptionsProvider({
        direction: "top",
        appearance: "floating"
      })],
      template: '@if (control()?.valueChanges | async) {}\n\n<div\n    class="t-ghost"\n    [style.--tui-slider-thumb-ratio]="ratio"\n    [style.inset-inline-start.px]="ghostStart"\n>\n    <ng-content />\n</div>\n\n<ng-content select="input[type=range]" />\n',
      styles: [':host{position:relative}.t-ghost{position:absolute;inset-block:0;margin:auto;border-radius:50%;pointer-events:none;inline-size:var(--tui-thumb-size, .75rem);block-size:var(--tui-thumb-size, .75rem);transform:translate(calc(var(--tui-slider-thumb-ratio) * var(--tui-thumb-size, .75rem) * -1 * var(--tui-inline)))}:host-context([dir="rtl"]) .t-ghost{inset-inline-start:unset!important}\n']
    }]
  }], null, null);
})();
var TuiSlider = [TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeyStepsBase, TuiSliderKeySteps, TuiSliderReadonly];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-group.mjs
var TUI_GROUP_DEFAULT_OPTIONS = {
  size: "l",
  collapsed: false,
  rounded: true,
  orientation: "horizontal"
};
var [TUI_GROUP_OPTIONS, tuiGroupOptionsProvider] = tuiCreateOptions(TUI_GROUP_DEFAULT_OPTIONS);
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
      exportAs: ["tui-group-5.6.0"],
      decls: 0,
      vars: 0,
      template: function Styles_Template(rf, ctx) {
      },
      styles: ['[tuiGroup]:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;transform:translateZ(0);--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask-image:var(--t-group-mask);mask-image:var(--t-group-mask);mask-clip:no-clip}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:disabled,[tuiGroup]:where(*[data-tui-version="5.6.0"])>*._disabled{z-index:0}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:invalid:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.6.0"])>*[data-mode~=invalid]{z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has(:invalid:not([data-mode])),[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has([data-mode~=invalid]){z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has(:focus-visible){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has([data-focus=true]){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:checked:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.6.0"])>*[data-mode~=checked]{z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has([tuiBlock]:checked){z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:not(:last-child){margin-inline-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:nth-child(n){border-radius:0}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:first-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:last-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical])>*:first-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical])>*:last-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-size=s],[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}\n'],
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
      exportAs: `tui-group-${TUI_VERSION}`,
      styles: ['[tuiGroup]:where(*[data-tui-version="5.6.0"]){position:relative;display:flex;transform:translateZ(0);--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-mask: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-end: linear-gradient(to right, rgba(0, 0, 0, .5) 1px, #000 2px);--t-group-mask-start: linear-gradient(to right, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) )}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*{z-index:1;flex:1 1 0;min-inline-size:0;-webkit-mask-image:var(--t-group-mask);mask-image:var(--t-group-mask);mask-clip:no-clip}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:disabled,[tuiGroup]:where(*[data-tui-version="5.6.0"])>*._disabled{z-index:0}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:invalid:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.6.0"])>*[data-mode~=invalid]{z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has(:invalid:not([data-mode])),[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has([data-mode~=invalid]){z-index:2;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has(:focus-visible){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has([data-focus=true]){z-index:3;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:checked:not([data-mode]),[tuiGroup]:where(*[data-tui-version="5.6.0"])>*[data-mode~=checked]{z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:has([tuiBlock]:checked){z-index:4;--t-group-mask: none;--t-group-mask-end: none;--t-group-mask-start: none}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:not(:last-child){margin-inline-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:nth-child(n){border-radius:0}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:first-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:last-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[tuiGroup]:where(*[data-tui-version="5.6.0"])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical])>*:first-child{border-radius:0 var(--t-group-radius) var(--t-group-radius) 0;-webkit-mask-image:var(--t-group-mask-end);mask-image:var(--t-group-mask-end)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical])>*:last-child{border-radius:var(--t-group-radius) 0 0 var(--t-group-radius);-webkit-mask-image:var(--t-group-mask-start);mask-image:var(--t-group-mask-start)}[dir=rtl] [tuiGroup]:where(*[data-tui-version="5.6.0"]):not([data-orientation=vertical])>*:only-child{border-radius:var(--t-group-radius);-webkit-mask-image:none;mask-image:none}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-size=s],[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-mask: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px, #000 calc(100% - 2px) , rgba(0, 0, 0, .5));--t-group-mask-start: linear-gradient(to bottom, #000 calc(100% - 2px) , rgba(0, 0, 0, .5) calc(100% - 1px) );--t-group-mask-end: linear-gradient(to bottom, rgba(0, 0, 0, .5) 1px, #000 2px)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup]:where(*[data-tui-version="5.6.0"])[data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}\n']
    }]
  }], null, null);
})();
var TuiGroup = class _TuiGroup {
  constructor() {
    this.options = inject(TUI_GROUP_OPTIONS);
    this.nothing = tuiWithStyles(Styles5);
    this.orientation = input(this.options.orientation);
    this.collapsed = input(this.options.collapsed);
    this.rounded = input(this.options.rounded);
    this.size = input(this.options.size);
  }
  static {
    this.ɵfac = function TuiGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiGroup,
      selectors: [["", "tuiGroup", "", 5, "ng-container"]],
      hostAttrs: ["data-tui-version", "5.6.0", "tuiGroup", ""],
      hostVars: 12,
      hostBindings: function TuiGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation())("data-size", ctx.size());
          ɵɵstyleProp("--t-group-margin", ctx.collapsed() ? null : 0.125, "rem")("--t-group-mask-end", ctx.collapsed() ? null : "none")("--t-group-mask-start", ctx.collapsed() ? null : "none")("--t-group-mask", ctx.collapsed() ? null : "none")("--t-group-radius", ctx.rounded() ? null : 0);
        }
      },
      inputs: {
        orientation: [1, "orientation"],
        collapsed: [1, "collapsed"],
        rounded: [1, "rounded"],
        size: [1, "size"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroup, [{
    type: Directive,
    args: [{
      selector: "[tuiGroup]:not(ng-container)",
      host: {
        "data-tui-version": TUI_VERSION,
        tuiGroup: "",
        "[attr.data-orientation]": "orientation()",
        "[attr.data-size]": "size()",
        "[style.--t-group-margin.rem]": "collapsed() ? null : 0.125",
        "[style.--t-group-mask-end]": 'collapsed() ? null : "none"',
        "[style.--t-group-mask-start]": 'collapsed() ? null : "none"',
        "[style.--t-group-mask]": 'collapsed() ? null : "none"',
        "[style.--t-group-radius]": "rounded() ? null : 0"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-format.mjs
function tuiNumberToStringWithoutExp(value) {
  const valueAsString = String(value);
  const [numberPart, expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart = ""] = numberPart?.split(".") ?? [];
    const decimalDigits = Number(expPart) + (fractionalPart?.length || 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function tuiGetFractionPartPadded(value, precision) {
  const [, fractionPartPadded = ""] = tuiNumberToStringWithoutExp(value).split(".");
  return tuiIsNumber(precision) ? fractionPartPadded.slice(0, Math.max(0, precision)) : fractionPartPadded;
}
function tuiFormatNumber(value, settings = {}) {
  const { precision, decimalSeparator, thousandSeparator, decimalMode, rounding } = __spreadValues(__spreadProps(__spreadValues({}, TUI_DEFAULT_NUMBER_FORMAT), {
    decimalMode: "always",
    precision: Infinity
  }), settings);
  const rounded = Number.isFinite(precision) ? tuiRoundWith({ value, precision, method: rounding }) : value;
  const integerPartString = String(Math.floor(Math.abs(rounded)));
  let fractionPartPadded = tuiGetFractionPartPadded(rounded, precision);
  const hasFraction = Number(fractionPartPadded) > 0;
  if (Number.isFinite(precision)) {
    if (decimalMode === "always" || hasFraction && decimalMode === "pad") {
      const zeroPaddingSize = Math.max(precision - fractionPartPadded.length, 0);
      const zeroPartString = "0".repeat(zeroPaddingSize);
      fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
    } else {
      fractionPartPadded = fractionPartPadded.replace(/0*$/, "");
    }
  }
  const remainder = integerPartString.length % 3;
  const sign = value < 0 ? CHAR_HYPHEN : "";
  let result = `${sign}${integerPartString.charAt(0)}`;
  for (let i = 1; i < integerPartString.length; i++) {
    if (i % 3 === remainder && integerPartString.length > 3) {
      result += thousandSeparator;
    }
    result += integerPartString.charAt(i);
  }
  return fractionPartPadded ? `${result}${decimalSeparator}${fractionPartPadded}` : result;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = null;
    this.initialized = false;
    Promise.resolve().then(() => {
      this.initialized = true;
      this.activeElement = tuiGetFocused(this.doc);
      this.el.focus();
    });
  }
  ngOnDestroy() {
    this.initialized = false;
    if (tuiIsHTMLElement(this.activeElement)) {
      this.activeElement.focus();
    }
  }
  onFocusIn(node) {
    const {
      firstElementChild
    } = this.el;
    if (!tuiContainsOrAfter(this.el, node) && firstElementChild) {
      tuiGetClosestFocusable({
        initial: firstElementChild,
        root: this.el
      })?.focus();
    }
  }
  static {
    this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFocusTrap)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFocusTrap,
      selectors: [["", "tuiFocusTrap", ""]],
      hostAttrs: ["tabIndex", "0"],
      hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown", function TuiFocusTrap_pointerdown_HostBindingHandler($event) {
            return $event.currentTarget == null ? null : $event.currentTarget.removeAttribute("tabindex");
          })("focusin.zoneless", function TuiFocusTrap_focusin_zoneless_HostBindingHandler($event) {
            return ctx.initialized && ctx.onFocusIn($event.target);
          }, ɵɵresolveWindow);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(pointerdown)": '$event.currentTarget?.removeAttribute("tabindex")',
        "(window:focusin.zoneless)": "initialized && onFocusIn($event.target)"
      }
    }]
  }], () => [], null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-modal.mjs
function TuiModalComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TuiModalComponent = class _TuiModalComponent {
  constructor() {
    this.current = inject(TuiActiveZone);
    this.parent = findActive(inject(TuiActiveZone, {
      skipSelf: true
    }), tuiGetFocused(inject(DOCUMENT)));
    this.context = injectContext();
    this.component = signal(null);
  }
  ngOnInit() {
    this.current.tuiActiveZoneParentSetter = this.parent;
  }
  ngOnDestroy() {
    this.current.tuiActiveZoneParentSetter = null;
  }
  static {
    this.ɵfac = function TuiModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiModalComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiModalComponent,
      selectors: [["tui-modal"]],
      hostAttrs: ["aria-modal", "true", "data-tui-version", "5.6.0", "role", "dialog", 1, "tui-enter"],
      hostVars: 1,
      hostBindings: function TuiModalComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationend.self", function TuiModalComponent_animationend_self_HostBindingHandler($event) {
            return $event.target.classList.remove("tui-enter");
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-labelledby", ctx.context.id);
        }
      },
      features: [ɵɵHostDirectivesFeature([TuiActiveZone, TuiFocusTrap])],
      decls: 3,
      vars: 2,
      consts: [["tuiScrollRef", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
      template: function TuiModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiModalComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          ɵɵelement(2, "tui-scroll-controls", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.component())("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollControls, TuiScrollRef],
      styles: ['@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version="5.6.0"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--t-root-top))}tui-modal:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar-thumb{display:none}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version="5.6.0"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.6.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.6.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version="5.6.0"]):before{transition-property:backdrop-filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version="5.6.0"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalComponent, [{
    type: Component,
    args: [{
      selector: "tui-modal",
      imports: [PolymorpheusOutlet, TuiScrollControls, TuiScrollRef],
      template: `
        <div tuiScrollRef>
            <ng-container *polymorpheusOutlet="component(); context: context" />
            <tui-scroll-controls class="t-scrollbars" />
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiActiveZone, TuiFocusTrap],
      host: {
        "aria-modal": "true",
        "data-tui-version": TUI_VERSION,
        role: "dialog",
        class: "tui-enter",
        "[attr.aria-labelledby]": "context.id",
        "(animationend.self)": '$event.target.classList.remove("tui-enter")'
      },
      styles: ['@keyframes tuiModalBackdrop{0%{-webkit-backdrop-filter:none;backdrop-filter:none}to{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}}@keyframes tuiDummy{to{color:currentColor}}tui-modal:where(*[data-tui-version="5.6.0"]){scrollbar-width:none;-ms-overflow-style:none;position:fixed;inset:0;outline:none;overflow:auto;overscroll-behavior:none;transform:translateY(var(--t-root-top))}tui-modal:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.6.0"])::-webkit-scrollbar-thumb{display:none}@supports not (selector(:has(*))) or not (selector(:nth-child(1 of *))){tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type:not(.tui-leave):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-enter,tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-leave{animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-enter:before,tui-modal:where(*[data-tui-version="5.6.0"]):last-of-type.tui-leave:before{animation-name:tuiModalBackdrop}}@supports (selector(:has(*))){tui-modal:where(*[data-tui-version="5.6.0"]):nth-last-child(1 of tui-modal:not(.tui-leave):not(:has(.tui-backdrop-hidden))):before{-webkit-backdrop-filter:brightness(.25);backdrop-filter:brightness(.25)}tui-modal:where(*[data-tui-version="5.6.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave){animation-name:tuiDummy}tui-modal:where(*[data-tui-version="5.6.0"]):nth-last-child(1 of tui-modal:not(:has(.tui-backdrop-hidden))):is(.tui-enter,.tui-leave):before{animation-name:tuiModalBackdrop}}tui-modal:where(*[data-tui-version="5.6.0"]):before{transition-property:backdrop-filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:sticky;inset:0;display:block;block-size:200%;transition-timing-function:linear;animation-duration:var(--tui-duration);animation-timing-function:cubic-bezier(.14,.52,.35,.84);perspective:10rem}tui-modal:where(*[data-tui-version="5.6.0"]).tui-leave:before{animation-direction:reverse}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]{scrollbar-width:none;-ms-overflow-style:none;position:sticky;inset:0;display:grid;place-items:center;block-size:100%;overflow:auto;overscroll-behavior:none}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]::-webkit-scrollbar,tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]::-webkit-scrollbar-thumb{display:none}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.t-scrollbars{position:fixed;inset:0;margin:0;color:#747474}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_horizontal,tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.t-scrollbars .t-bar_vertical .t-thumb[style*="height: 100%"]{display:none}tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.tui-enter+.t-scrollbars .t-bar_vertical,tui-modal:where(*[data-tui-version="5.6.0"])>[tuiScrollRef]>.tui-leave+.t-scrollbars .t-bar_vertical{display:none}\n']
    }]
  }], null, null);
})();
function findActive(zone, el) {
  if (!el || !zone.contains(el)) {
    return null;
  }
  const active = zone.children.find((child) => !child["el"].matches("[tuiActiveZoneAdapter]") && child.contains(el));
  return active ? findActive(active, el) : zone;
}
var TuiModalService = class _TuiModalService extends TuiPortal {
  constructor() {
    super(inject(TuiPopupService));
    this.component = TuiModalComponent;
  }
  add(component) {
    const ref = this.service.add(component);
    const el = ref.location.nativeElement;
    ref.instance.component.set(new PolymorpheusComponent(this.content));
    return () => {
      ref.instance.component.set(null);
      ref.changeDetectorRef.detectChanges();
      el.classList.add(TUI_LEAVE);
      Promise.allSettled(getAnimations(el)).then(async () => Promise.allSettled(getAnimations(el.firstElementChild))).then(() => {
        ref.destroy();
        el.remove();
      });
    };
  }
  static {
    this.ɵfac = function TuiModalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiModalService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiModalService,
      factory: _TuiModalService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiModalService, [{
    type: Injectable
  }], () => [], null);
})();
function getAnimations(el) {
  return el?.getAnimations?.().map(async ({
    finished
  }) => finished) || [];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    return this.el.nativeElement.querySelector(this.options.query) ?? this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return Number.parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: Number.NaN,
  // NaN = no delay/sync
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = new InjectionToken(ngDevMode ? "TUI_AUTOFOCUS_HANDLER" : "");
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, WA_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  // eslint-disable-next-line @typescript-eslint/max-params,max-params
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
    this.autoFocus = input(void 0, {
      alias: "tuiAutoFocus",
      transform: coerceBooleanProperty
    });
  }
  ngAfterViewInit() {
    if (this.autoFocus()) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
  static {
    this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoFocus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAutoFocus,
      selectors: [["", "tuiAutoFocus", ""]],
      inputs: {
        autoFocus: [1, "tuiAutoFocus", "autoFocus"]
      },
      features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-portals-dialog.mjs
function TuiDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function TuiDialogComponent_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close$.next());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("appearance", ctx_r1.context.appearance.includes("fullscreen") ? "action" : "neutral");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.close(), " ");
  }
}
function TuiDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header")(1, "hgroup", 3);
    ɵɵelement(2, "h2", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, ɵɵsanitizeHtml);
  }
}
function TuiDialogComponent_ng_container_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "footer")(1, "button", 6);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_2_Conditional_5_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.context.data || "OK", " ");
  }
}
function TuiDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "header")(2, "hgroup", 3);
    ɵɵelement(3, "h2", 4)(4, "p", 5);
    ɵɵelementEnd()();
    ɵɵconditionalCreate(5, TuiDialogComponent_ng_container_2_Conditional_5_Template, 3, 1, "footer");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("id", ctx_r1.context.id)("innerHTML", ctx_r1.context.label, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.context.closable || ctx_r1.context.dismissible ? 5 : -1);
  }
}
var TUI_DIALOGS_CLOSE = new InjectionToken(ngDevMode ? "TUI_DIALOGS_CLOSE" : "", {
  factory: () => inject(Router).events.pipe(filter((e) => e instanceof ActivationStart))
});
var TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$, tuiCloseWatcher().pipe(tuiZonefull())).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return (
        // @ts-ignore
        typeof CloseWatcher === "undefined" && event.key?.toLowerCase() === "escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target))
      );
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => (
      // Scrollbars
      tuiGetViewportWidth(this.win) - event.clientX > 17 && this.isOutside(tuiGetActualTarget(event))
    )), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && !tuiContainsOrAfter(this.el, target);
  }
  static {
    this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogCloseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogCloseService,
      factory: _TuiDialogCloseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], () => [], null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable2(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.close$ = new Subject();
    this.close = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.context = injectContext();
    this.primitive = typeof this.context.content === "function" || Object(this.context.content) !== this.context.content;
    this.sub = merge(this.close$.pipe(switchMap(() => toObservable2(this.context.closable))), inject(TuiDialogCloseService).pipe(exhaustMap(() => toObservable2(this.context.dismissible).pipe(take(1)))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      if (this.context.required) {
        this.context.$implicit.error(REQUIRED_ERROR);
      } else {
        this.context.$implicit.complete();
      }
    });
  }
  static {
    this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogComponent,
      selectors: [["tui-dialog"]],
      hostAttrs: ["data-tui-version", "5.6.0"],
      hostVars: 6,
      hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.context.size);
          ɵɵclassProp("_closable", ctx.context.closable)("tui-backdrop-hidden", ctx.context.appearance.includes("fullscreen"));
        }
      },
      features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵHostDirectivesFeature([TuiAnimated])],
      decls: 3,
      vars: 4,
      consts: [["tabindex", "0", "tuiButtonX", "", 3, "appearance"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tabindex", "0", "tuiButtonX", "", 3, "click", "appearance"], ["tuiTitle", ""], [3, "id", "innerHTML"], [3, "innerHTML"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"]],
      template: function TuiDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, TuiDialogComponent_Conditional_0_Template, 2, 2, "button", 0);
          ɵɵconditionalCreate(1, TuiDialogComponent_Conditional_1_Template, 3, 2, "header");
          ɵɵtemplate(2, TuiDialogComponent_ng_container_2_Template, 6, 4, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.context.closable ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.primitive && ctx.context.label ? 1 : -1);
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiAutoFocus, TuiButton, TuiButtonX, TuiTitle],
      styles: ['tui-dialog:where(*[data-tui-version="5.6.0"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--tui-typography-body-m);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-popup)}tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])>header,tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.6.0"])>header [tuiTitle],tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version="5.6.0"])>header p,tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}tui-dialog:where(*[data-tui-version="5.6.0"])>header p:empty,tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version="5.6.0"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--tui-from: translateY(2.5rem)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--tui-background-base);box-shadow:none;--tui-width: 45rem;--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--tui-typography-body-l)!important;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:"";block-size:1.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--tui-width) / 2) solid transparent;margin:0 calc(var(--tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--tui-width) / 2);margin:0 calc(var(--tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      selector: "tui-dialog",
      imports: [PolymorpheusOutlet, TuiAutoFocus, TuiButton, TuiButtonX, TuiTitle],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      hostDirectives: [TuiAnimated],
      host: {
        "data-tui-version": TUI_VERSION,
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "context.size",
        "[class._closable]": "context.closable",
        "[class.tui-backdrop-hidden]": 'context.appearance.includes("fullscreen")'
      },
      template: `@if (context.closable) {
    <button
        tabindex="0"
        tuiButtonX
        [appearance]="context.appearance.includes('fullscreen') ? 'action' : 'neutral'"
        (click)="close$.next()"
    >
        {{ close() }}
    </button>
}

@if (!primitive && context.label) {
    <header>
        <hgroup tuiTitle>
            <h2
                [id]="context.id"
                [innerHTML]="context.label"
            ></h2>
        </hgroup>
    </header>
}

<ng-container *polymorpheusOutlet="context.content as text; context: context">
    <header>
        <hgroup tuiTitle>
            <h2
                [id]="context.id"
                [innerHTML]="context.label"
            ></h2>
            <p [innerHTML]="text"></p>
        </hgroup>
    </header>
    @if (context.closable || context.dismissible) {
        <footer>
            <button
                size="m"
                tuiAutoFocus
                tuiButton
                type="button"
                (click)="context.$implicit.complete()"
            >
                {{ context.data || 'OK' }}
            </button>
        </footer>
    }
</ng-container>
`,
      styles: ['tui-dialog:where(*[data-tui-version="5.6.0"]){position:relative;box-sizing:border-box;overflow-wrap:break-word;font:var(--tui-typography-body-m);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-popup)}tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>header,tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header{padding-inline-end:2.5rem}tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>header p,tui-dialog:where(*[data-tui-version="5.6.0"]):not([data-appearance~=fullscreen])._closable>ng-component>header p{margin-inline-end:-2.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])>header,tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.6.0"])>header [tuiTitle],tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header [tuiTitle]{font:inherit}tui-dialog:where(*[data-tui-version="5.6.0"])>header p,tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header p{margin:.25rem 0 0;font:var(--tui-typography-body-m)}tui-dialog:where(*[data-tui-version="5.6.0"])>header p:empty,tui-dialog:where(*[data-tui-version="5.6.0"])>ng-component>header p:empty{display:none}tui-dialog:where(*[data-tui-version="5.6.0"])>[tuiButtonX]{position:absolute;z-index:1;inset-block-start:1rem;inset-inline-end:1rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga]{max-inline-size:calc(100vw - 5rem);margin:2.5rem;padding:1.75rem;border-radius:1.5rem;--tui-from: translateY(2.5rem)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga].tui-enter,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]{inline-size:25rem;padding:1.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h5)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.25rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>footer,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=s]>ng-component>footer{margin-block-start:1.25rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m],tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]{inline-size:37.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h4)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=m]>ng-component>[tuiSlides]>*>header:not(:last-child),tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]>ng-component>[tuiSlides]>*>header:not(:last-child){margin-block-end:1.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga][data-size=l]{inline-size:50rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga]>footer,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=taiga]>ng-component>footer{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;gap:.75rem;margin-block-start:2rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]{display:flex;flex-direction:column;block-size:100%;inline-size:100%;padding:env(safe-area-inset-top) max(calc(50vw - var(--tui-width) / 2),1rem) max(2rem,env(safe-area-inset-bottom));background:var(--tui-background-base);box-shadow:none;--tui-width: 45rem;--tui-from: translateY(2rem)}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size].tui-enter,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size].tui-leave{animation-name:tuiFade,tuiSlide}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{position:sticky;inset-block-start:env(safe-area-inset-top);block-size:4rem;inline-size:auto;align-self:flex-end;margin-block-end:2rem;border-radius:0!important;font:var(--tui-typography-body-l)!important;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0 / 0 / env(safe-area-inset-top) 100vw 0}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]:before{display:none}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size].tui-app-bar>[tuiButtonX]{display:none}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]:not(._closable):not(.tui-app-bar):before{content:"";block-size:1.5rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{position:sticky;z-index:1;inset-block-start:0;order:-1;border-inline-end:calc(50vw - var(--tui-width) / 2) solid transparent;border-inline-start:calc(50vw - var(--tui-width) / 2) solid transparent;margin:0 calc(var(--tui-width) / 2 - 50vw) 2rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{font:var(--tui-typography-heading-h3);margin-block-end:2rem}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{display:flex;gap:.5rem .75rem;padding:2rem calc(50vw - var(--tui-width) / 2);margin:0 calc(var(--tui-width) / 2 - 50vw) calc(-2rem - env(safe-area-inset-top))}tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{inset-inline-start:0;inset-inline-end:0}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{flex-direction:row;background:color-mix(in hsl,var(--tui-background-base) 80%,transparent);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer:before,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer:before{display:none}tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>button,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer>a,tui-root:not(._mobile) tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer>a{inline-size:auto}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]{padding-block-end:max(1rem,env(safe-area-inset-bottom));--tui-from: translateY(4rem)}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX]{align-self:flex-start;block-size:3.5rem;margin-block-end:1rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>tui-app-bar,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>tui-app-bar{margin:calc(-1*env(safe-area-inset-top)) -1rem 1rem;padding-block-start:env(safe-area-inset-top);box-sizing:content-box}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiSlides]>*>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>header,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>[tuiSlides]>*>header{margin:-.25rem 0 1.5rem}tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>footer,tui-root._mobile tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>ng-component>footer{padding:0 1rem max(1rem,env(safe-area-inset-bottom));margin:1.5rem -1rem calc(-1*max(1rem,env(safe-area-inset-bottom)))}[data-platform=ios] tui-dialog:where(*[data-tui-version="5.6.0"])[data-appearance~=fullscreen][data-size]>[tuiButtonX][tuiButtonX]{block-size:2.75rem}\n']
    }]
  }], null, null);
})();
var [TUI_DIALOG_OPTIONS, tuiDialogOptionsProvider] = tuiCreateOptions({
  appearance: "taiga",
  size: "m",
  required: false,
  closable: true,
  dismissible: true,
  label: "",
  data: void 0
});
var TuiDialogService = class _TuiDialogService extends TuiModalService {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DIALOG_OPTIONS);
    this.content = TuiDialogComponent;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialogService_BaseFactory;
      return function TuiDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogService,
      factory: _TuiDialogService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiDialog = class _TuiDialog {
  constructor() {
    this.tuiDialogOptions = input({});
  }
  static {
    this.ɵfac = function TuiDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialog)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDialog,
      selectors: [["ng-template", "tuiDialog", ""]],
      inputs: {
        tuiDialogOptions: [1, "tuiDialogOptions"]
      },
      features: [ɵɵProvidersFeature([tuiAsPortal(TuiDialogService)]), ɵɵHostDirectivesFeature([{
        directive: TuiPortalDirective,
        inputs: ["options", "tuiDialogOptions", "open", "tuiDialog"],
        outputs: ["openChange", "tuiDialogChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      selector: "ng-template[tuiDialog]",
      providers: [tuiAsPortal(TuiDialogService)],
      hostDirectives: [{
        directive: TuiPortalDirective,
        inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
        outputs: ["openChange: tuiDialogChange"]
      }]
    }]
  }], null, null);
})();
function tuiDialog(component, _a = {}) {
  var _b = _a, {
    injector
  } = _b, options = __objRest(_b, [
    "injector"
  ]);
  if (!injector) {
    assertInInjectionContext(tuiDialog);
    injector = inject(INJECTOR$1);
  }
  const dialogService = injector.get(TuiDialogService);
  return (data) => dialogService.open(new PolymorpheusComponent(component, injector), __spreadProps(__spreadValues({}, options), {
    data
  }));
}

export {
  RANGE_SEPARATOR_CHAR,
  HOURS_IN_DAY,
  MILLISECONDS_IN_DAY,
  DATE_FILLER_LENGTH,
  DATE_RANGE_FILLER_LENGTH,
  TuiYear,
  TuiMonth,
  TuiDay,
  TuiMonthRange,
  TuiDayRange,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TuiTime,
  TuiMapperPipe,
  TuiValidator,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TuiItemsHandlersDirective,
  TuiWithItemsHandlers,
  TuiItemsHandlersValidator,
  TuiHovered,
  TUI_LINK_OPTIONS,
  tuiLinkOptionsProvider,
  TuiLink,
  TuiSpinButton,
  TUI_CALENDAR_DEFAULT_OPTIONS,
  TUI_CALENDAR_OPTIONS,
  tuiCalendarOptionsProvider,
  TUI_CALENDAR_SHEET_DEFAULT_OPTIONS,
  TUI_CALENDAR_SHEET_OPTIONS,
  tuiCalendarSheetOptionsProvider,
  TuiCalendarSheetPipe,
  TuiOrderWeekDaysPipe,
  TuiCalendarSheet,
  TuiCalendarSpin,
  TuiCalendarYear,
  TuiCalendar,
  TuiNativeValidator,
  TUI_RADIO_OPTIONS,
  tuiRadioOptionsProvider,
  TuiRadioComponent,
  TuiRadioDirective,
  TuiRadio,
  TUI_CHECKBOX_OPTIONS,
  tuiCheckboxOptionsProvider,
  TuiCheckbox,
  TuiValueTransformer,
  tuiValueTransformerFrom,
  TuiNonNullableValueTransformer,
  TUI_IDENTITY_VALUE_TRANSFORMER,
  TuiControl,
  tuiAsControl,
  TuiValidationError,
  TuiExpand,
  TuiIcon,
  TuiIconPipe,
  WaResizeObserverService,
  WaResizeObserver,
  TuiButtonX,
  TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS,
  TUI_FILTER_BY_INPUT_OPTIONS,
  tuiFilterByInputOptionsProvider,
  TuiFilterByInputPipe,
  TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TuiTextfieldOptionsDirective,
  TuiSelectLike,
  TUI_TEXTFIELD_ACCESSOR,
  tuiAsTextfieldAccessor,
  TuiTextfieldComponent,
  TuiTextfieldItemComponent,
  TUI_TEXTFIELD_ITEM,
  TuiTextfieldMultiComponent,
  TuiTextfield,
  tuiInjectAuxiliary,
  TUI_TEXTFIELD_CONTENT,
  tuiAsTextfieldContent,
  TuiTextfieldContent,
  TuiWithNativePicker,
  TuiInputDirective,
  TuiWithInput,
  TuiInput,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  tuiLoaderOptionsProvider,
  TuiLoader,
  TuiAlertDirective,
  TuiAlertService,
  TuiTitle,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  tuiNotificationOptionsProvider,
  TUI_NOTIFICATION_CONCURRENCY,
  TuiNotificationDirective,
  TuiNotificationComponent,
  TuiNotificationService,
  TuiNotificationTemplate,
  TuiNotification,
  TuiRoot,
  TUI_HINT_COMPONENT,
  TuiHintDriver,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_OPTIONS,
  tuiHintOptionsProvider,
  TuiHintHover,
  TuiHintPosition,
  TuiHintDirective,
  TuiHintPointer,
  TuiHintUnstyledComponent,
  TuiHintUnstyled,
  TUI_HINT_PROVIDERS,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintHost,
  TuiHintManual,
  TuiHintOverflow,
  TuiHint,
  TUI_FLOATING_PRECISION,
  tuiPercentageToKeyStepValue,
  tuiKeyStepValueToPercentage,
  tuiCreateKeyStepsTransformer,
  TuiSliderComponent,
  TuiSliderKeyStepsBase,
  TuiSliderKeySteps,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiSlider,
  TUI_GROUP_DEFAULT_OPTIONS,
  TUI_GROUP_OPTIONS,
  tuiGroupOptionsProvider,
  TuiGroup,
  tuiNumberToStringWithoutExp,
  tuiGetFractionPartPadded,
  tuiFormatNumber,
  tuiAutoFocusOptionsProvider,
  TuiAutoFocus,
  TuiModalComponent,
  TuiModalService,
  TUI_DIALOGS_CLOSE,
  TuiDialogCloseService,
  TuiDialogComponent,
  TUI_DIALOG_OPTIONS,
  tuiDialogOptionsProvider,
  TuiDialogService,
  TuiDialog,
  tuiDialog
};
//# sourceMappingURL=chunk-VIO2YYWO.js.map

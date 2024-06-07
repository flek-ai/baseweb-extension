(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // lib/icon/list-icon.tsx
  var React3 = __toESM(__require("react"));
  var import_styles2 = __require("baseui/styles");

  // lib/helpers/overrides.tsx
  var React = __toESM(__require("react"));
  var import_react_is = __require("react-is");

  // lib/utils/deep-merge.ts
  function deepMerge(target, ...sources) {
    target = target || {};
    const len = sources.length;
    let obj;
    let value;
    for (let i = 0; i < len; i++) {
      obj = sources[i] || {};
      for (let key in obj) {
        if (typeof obj[key] !== void 0) {
          value = obj[key];
          if (isCloneable(value)) {
            target[key] = deepMerge(
              /* eslint-disable-next-line no-mixed-operators */
              // @ts-ignore
              target[key] || Array.isArray(value) && [] || {},
              value
            );
          } else {
            target[key] = value;
          }
        }
      }
    }
    return target;
  }
  function isCloneable(obj) {
    return Array.isArray(obj) || {}.toString.call(obj) == "[object Object]";
  }

  // lib/helpers/overrides.tsx
  function getOverride(_override) {
    if ((0, import_react_is.isValidElementType)(_override)) {
      return _override;
    }
    if (_override && typeof _override === "object") {
      return _override.component;
    }
    return _override;
  }
  function getOverrideProps(_override) {
    if (_override && typeof _override === "object") {
      if (typeof _override.props === "object") {
        return {
          ..._override.props,
          $style: _override.style
        };
      } else {
        return {
          $style: _override.style
        };
      }
    }
    return {};
  }
  function toObjectOverride(_override) {
    if ((0, import_react_is.isValidElementType)(_override)) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component: _override
      };
    }
    return _override || {};
  }
  function getOverrides(_override, defaultComponent) {
    const Component = getOverride(_override) || defaultComponent;
    if (_override && typeof _override === "object" && typeof _override.props === "function") {
      const DynamicOverride = React.forwardRef((props2, ref) => {
        const mappedProps = _override.props(props2);
        const nextProps = getOverrideProps({
          ..._override,
          props: mappedProps
        });
        return /* @__PURE__ */ React.createElement(Component, { ref, ...nextProps });
      });
      DynamicOverride.displayName = Component.displayName;
      return [DynamicOverride, {}];
    }
    const props = getOverrideProps(_override);
    return [Component, props];
  }
  function mergeOverride(target, source) {
    const merged = { ...target, ...source };
    if (target.props && source.props) {
      merged.props = mergeConfigurationOverrides(target.props, source.props);
    }
    if (target.style && source.style) {
      merged.style = mergeConfigurationOverrides(target.style, source.style);
    }
    return merged;
  }
  function mergeConfigurationOverrides(target, source) {
    if (typeof target === "object" && typeof source === "object") {
      return deepMerge({}, target, source);
    }
    return (...args) => {
      return deepMerge(
        {},
        typeof target === "function" ? target(...args) : target,
        typeof source === "function" ? source(...args) : source
      );
    };
  }

  // lib/icon/icon.tsx
  var React2 = __toESM(__require("react"));

  // lib/icon/styled-components.ts
  var import_styles = __require("baseui/styles");
  function getSvgStyles({
    $theme,
    $size,
    $color
  }) {
    let size = $theme.sizing.scale600;
    if ($size) {
      if ($theme.sizing[$size]) {
        size = $theme.sizing[$size];
      } else if (typeof $size === "number") {
        size = `${$size}px`;
      } else {
        size = $size;
      }
    }
    let color = "currentColor";
    if ($color) {
      if ($theme.colors[$color]) {
        color = $theme.colors[$color];
      } else {
        color = $color;
      }
    }
    return {
      display: "inline-block",
      fill: color,
      color,
      height: size,
      width: size
    };
  }
  var Svg = (0, import_styles.styled)("svg", getSvgStyles);
  Svg.displayName = "Svg";

  // lib/icon/omit-dollar-prefixed-keys.ts
  function omitDollarPrefixedKeys(source) {
    const result = {};
    for (const key in source) {
      if (key[0] !== "$") {
        result[key] = source[key];
      }
    }
    return result;
  }

  // lib/icon/icon.tsx
  var Icon = (props, ref) => {
    const { children, title, size, color, overrides = {}, ...restProps } = props;
    const [Svg2, overrideProps] = getOverrides(overrides.Svg, Svg);
    const passThroughProps = Svg2.__STYLETRON__ ? {
      title,
      $color: color,
      $size: size,
      ...restProps,
      ...overrideProps
    } : {
      title,
      color,
      size,
      ...omitDollarPrefixedKeys(restProps),
      ...omitDollarPrefixedKeys(overrideProps)
    };
    return /* @__PURE__ */ React2.createElement(Svg2, { "data-baseweb": "icon", ref, ...passThroughProps }, title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, children);
  };
  var icon_default = React2.forwardRef(Icon);

  // lib/icon/list-icon.tsx
  var customIcons = {
    car: {
      title: "Car",
      path: /* @__PURE__ */ React3.createElement(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.80843 3C5.86536 3 5.05043 3.6588 4.85283 4.58094L3.63644 10.2575C3.29513 10.4497 3.01114 10.7417 2.82918 11.1056L2.21115 12.3416C2.07229 12.6194 2 12.9256 2 13.2361V19C2 20.1046 2.89543 21 4 21H6C7.10457 21 8 20.1046 8 19H16C16 20.1046 16.8954 21 18 21H20C21.1046 21 22 20.1046 22 19V13.2361C22 12.9256 21.9277 12.6194 21.7889 12.3416L21.1708 11.1056C20.9889 10.7417 20.7049 10.4498 20.3636 10.2575L19.1472 4.58094C18.9496 3.6588 18.1347 3 17.1916 3H6.80843ZM20 13.5H17C16.4477 13.5 16 13.9477 16 14.5C16 15.0523 16.4477 15.5 17 15.5H20V19H18V17H6V19H4V15.5H7C7.55228 15.5 8 15.0523 8 14.5C8 13.9477 7.55228 13.5 7 13.5H4V13.2361L4.61803 12H19.382L20 13.2361V13.5ZM18.263 10L17.1916 5L6.80843 5L5.73701 10H18.263Z"
        }
      )
    }
  };
  function ListIconWithType(type) {
    return function ListIcon(props, ref) {
      const [, theme] = (0, import_styles2.useStyletron)();
      const {
        title = customIcons[type].title,
        size,
        color,
        overrides = {},
        ...restProps
      } = props;
      const SvgOverride = mergeOverride(
        // Icons from the theme target the SVG override in the underlying Icon component
        {
          // @ts-ignore
          component: theme.icons ? theme.icons : null
        },
        overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {}
      );
      return /* @__PURE__ */ React3.createElement(
        icon_default,
        {
          viewBox: "0 0 24 24",
          ref,
          title,
          size,
          color,
          overrides: { Svg: SvgOverride },
          ...restProps
        },
        customIcons[type].path
      );
    };
  }
  function ListIcons(type) {
    return React3.forwardRef(ListIconWithType(type));
  }
})();

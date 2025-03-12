import { Text as RNText, type TextProps, type TextStyle } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient, {
  type LinearGradientProps,
} from 'react-native-linear-gradient';
import { createContext, type ReactNode, useContext } from 'react';

const textStylePick = [
  'color',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textDecorationLine',
  'textDecorationStyle',
  'textDecorationColor',
  'textShadowColor',
  'textShadowOffset',
  'textShadowRadius',
  'textTransform',
  'userSelect',
  'textAlignVertical',
  'verticalAlign',
  'includeFontPadding',
  'fontVariant',
  'writingDirection',
] as const;
const textPropsPick = ['allowFontScaling'] as const;
const linearGradientPropsPick = [
  'colors',
  'start',
  'end',
  'locations',
  'useAngle',
  'angleCenter',
  'angle',
] as const;
export type TextPlusProps = TextProps &
  Partial<Pick<LinearGradientProps, (typeof linearGradientPropsPick)[number]>> &
  Pick<TextStyle, (typeof textStylePick)[number]> &
  Pick<TextProps, (typeof textPropsPick)[number]>;

type ContextType = Pick<TextStyle, (typeof textStylePick)[number]> &
  Pick<TextProps, (typeof textPropsPick)[number]>;

export const TextContext = createContext<ContextType>({});
export const Provider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: ContextType;
}) => {
  const preContext = useContext(TextContext);
  return (
    <TextContext.Provider
      value={{
        ...preContext,
        ...value,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};
export const TextContextProvider = Provider;
export const Context = TextContext;
export const Text = (props: TextPlusProps) => {
  const context = useContext(TextContext);
  const textProps: TextProps = {
    ...omitObj(context, textStylePick),
    ...omitObj(props, textStylePick, linearGradientPropsPick),
    style: {
      ...pickObj(context, textStylePick),
      ...pickObj(props, textStylePick),
      ...(props.style as any),
    },
  };
  return (
    <Provider
      value={{
        ...context,
        ...pickObj(props, textStylePick),
      }}
    >
      {props.colors ? (
        <RNText>
          <MaskedView
            style={{ flex: 0 }}
            maskElement={
              <RNText
                {...textProps}
                style={{
                  ...(textProps.style as any),
                  backgroundColor: 'transparent',
                  color: '#000',
                }}
              />
            }
          >
            <LinearGradient
              {...(pickObj(
                props,
                linearGradientPropsPick
              ) as LinearGradientProps)}
            >
              <RNText
                {...textProps}
                style={{ ...(textProps.style as object), opacity: 0 }}
              />
            </LinearGradient>
          </MaskedView>
        </RNText>
      ) : (
        <RNText {...textProps} />
      )}
    </Provider>
  );
};
Text.Provider = Provider;
Text.Context = TextContext;
export default Text as typeof Text & {
  Provider: typeof Provider;
  Context: typeof TextContext;
};

const omitObj = <T extends object, K extends keyof T>(
  obj: T,
  ...keys: Array<K | readonly K[]>
) =>
  Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keys.flat().includes(k as K))
  );
const pickObj = <T extends object, K extends keyof T>(
  obj: T,
  ...keys: Array<K | readonly K[]>
) =>
  Object.fromEntries(
    Object.entries(obj).filter(([k]) => keys.flat().includes(k as K))
  );

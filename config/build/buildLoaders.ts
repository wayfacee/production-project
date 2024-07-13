import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  // порядок важен
  const {isDev} = options;

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            // чтобы тока для .module. применилось:
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          // название с хэшом 
          localIdentName: isDev 
          ? '[path][name]__[local]-[hash:base64:5]' 
          : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // если не исп. ts, то нужен babel-loader
  // новый стандарт жса, в старый (чтобы браузеры перегонялись)
  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/, // исключ. нод модули
    };

  return [
    typescriptLoader,
    cssLoader,
  ]
}
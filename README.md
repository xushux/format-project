# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


conventional commits
什么是conventional commits，他就是在我们提交的时候，对我们的提价信息做一个规范 就是我们约定这种提交信息的一种格式，然后后面大家都按照这种格式来提交

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

type 类型
scope 就是一个可选的scope就是你这个提交要更改的范围是什么，更改了哪一个模块影响了那些功能，然后你就可以写上这个，不过他是可选的
description 就是一个简单的描述
下面还有一个可选的body 和 footer就是正文个脚注 后面加了个换行 就是比如说你前面这个des是一个很短的一个描述，然后当你有很长的一些内容的话你可以写在后面就是换一行写在后面，然后下面的话比如你修复了一个什么issue，然后你也可以在下面写一些修复issue的情况或者你提交的这个更新有一些breaking就是相比上个版本有一个比较大的改动 然后和上个版本不兼容这个时候 那里是需要特别区标注的 大致就是这样一个规范， 然后下面去实现这一套规则 就是比如写像vue，react这些框架的时候都是用了什么方法来提交像这种规范性的提交信息呢 ，这里就要介绍一下一个叫commitizen这样一个工具 后面将会将三个方面的内容 第一个部分呢就是这个commitizen这个命令行的使用，它可以一步一步引导我们去填写这种规范的一个提交信息 第二个就是怎么在我们的项目中去配置当你的信息不符合规范的时候 我们就禁止他提交 就是你git commit 如果你的信息不符合规范 他会直接报失败 我们这里会利用husky和commitlint这两个工具来做一个校验 提交之前的校验 然后最后我们会根据这个commit的一个信息去生成这个changelog 这里会用到一个工具叫standard-version 它可以帮我们自动打tag自动生成changelog自动生成版本号 就是很多都给你弄好了 是一个比较好的实践方案 首先我们来讲一下commitizen的使用， commitizen的话，它就是用来代替git commit的 ，像我们git commit的时候 你可能随便写一些东西 commitizen他会注入一个cz的命令， 当你输入git cz的时候 他会一步步引导你去选择 ei？ 你要提交什么类型的一个提交 然后你的提交信息是什么 然后你是否有一些破坏性的改动什么的，他会一步一步引导你去写 commitizen这里是全局安装的  npm install -g commitizen cz-conventional-changelog
 后面这个cz 然后conventional-changelog 这个也是一定要装的 然后你不装的话会有一些问题 下面这个配置也是  有一个echo相当于把这个字符串然后他的输入的流 然后重定向到这个文件里面 其实就是新建一个这个.czrc的文件 然后把这些配置写进去 然后这样之后 我们在任何地方使用git cz 然后他就可以代替git commit 的一个功能 然后我们可以在这里试一下 输入git cz 然后他就提示我们去选择一个我们要提交的类型 这里有说明 首先第一个就是feat（念列表） 然后我们这里选择一个feat 他就会提示下一步，就是这个更改会影响什么范围 ，相当于就是你 更改了哪一个模块 我们可以写一个模块名也可以直接按回车跳过去，这里我们可以写一个test吧 因为我们在测试， 然后他第三步的话 他就让你写一个简短的精炼的一个描述，就比如说我随便写一个 相当于就是你一些提交信息 update，这就是简单的一个 随便写一个提示 ，然后回车，然后他后面要你，提示你写一个比较长的一个描述，一般这个我们直接跳过就可以了 第五个 这里的话 是否你的这次提交会有一些破坏性的更新 然后是否影响一些正在open的一个issue 就是还没有解决的一些issue 这里演示的大概就是你提交的一个流程，有一个表格把这里面的一个类型 都列举了出来 然后他的每一步是什么 刚刚也大致的讲了一下
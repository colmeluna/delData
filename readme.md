
#A deletion of data based on electron engineering。

#Used to delete parking data every month or day。

#Dev:Nodejs  + mysql + bootstarp +html+css+jquery 

#Consturct : electron

#issues Electron开发安装主要问题：
   1、由于墙的问题。所以每次执行npm electron的时候都要指明 路径地址:
         `DEBUG=* ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/" sudo npm install electron-packager -g`
   2、electron打包命令：  
        `electron-packager ./ --platform win32 --arch=x64`
    electron打包前最好加上 electron_mirror 也就是：
      DEBUG=* ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/“ electron-packager ./ --platform win32 --arch=x64 —no-prune
    此处注意 **—no-prune**参数。 把node_modules 同时打包。需要的依赖需要打包进package中，所以参数—no-prune很重要。
    由于win32包，所以在Macos系统中打包win32需要安装`wine`。通过brew install wine自动安装。其中由于墙的原因，安装较慢。
    ~~win32输出目录很奇怪：
    /private/var/folders/f8/985kc8x54_l5dqt8wsd6v2sc0000gn/T/electron-packager/win32-x64/randomTruntable-win32-x64~~
    mac打包win32相应资源参考：
    http://www.jianshu.com/p/15dca14e50aa
    macOS下打包成win32格式时遇到的问题。需要加入 `—app-version=0.0.2`参数 ，否则报错。待深入。
    打包命令例：
    cd app's_Dir
    for win32
    `electron-packager ./ --platform win32 --arch=x64 --no-prune --app-version=0.0.2
    electron-packager ./ --platform win32 --arch=x64 --no-prune --overwrite --app-version=0.0.2`
    for mac 
    `electron-packager ./ --platform darwin --arch=x64 --no-prune --overwrite `

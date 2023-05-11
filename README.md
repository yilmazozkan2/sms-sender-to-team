# sms-sender-to-team
In this application, sending sms to colleagues using expo-cli and Realm MongoDB database was implemented.
![Capture3](https://github.com/yilmazozkan2/sms-sender-to-team/assets/52213548/3718d828-e689-4e55-a385-84a013d35970)
`npm install -g npm@6`  
When run with normal expo, it could not recognize third party library like expo realm, so we introduced it to expo development client.  
`npx expo run:android -d` command solved missing realm constructor did you pod install error  
We also use this command while running the application  
[Error: Exception in HostFunction: Realm at path '/data/data/com.yilmazozkan2.smssendertoteam/files/default.realm' already opened with a -different schema mode.] Realm.open was not used in the project because the error message originates from Realm.open.  
Touching TextInput opens keyboard and ImageBackground slides up. The problem is that Dimension was used for width and height related to ---style and the sliding problem was solved.

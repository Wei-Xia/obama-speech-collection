//
//  AppDelegate.swift
//  Obama Speech Collection
//

//  Copyright (c) 2017 Wei Xia. All rights reserved.
//


//python -m SimpleHTTPServer 9001 for localhost

import UIKit
import TVMLKit
import Fabric
import Crashlytics


@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {
    
    var window: UIWindow?
    let defaults = UserDefaults.standard
    
    
    var appController: TVApplicationController?
//    static let TVBaseURL = "http://localhost:9001/"
    static let TVBaseURL = "http://54.164.30.242:8080/"
    static let TVBootURL = "\(AppDelegate.TVBaseURL)js/application.js"
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        window = UIWindow(frame: UIScreen.main.bounds)
        
        Fabric.with([Crashlytics.self])
        
        // 1
        let appControllerContext = TVApplicationControllerContext()
        
        // 2 
        guard let javaScriptURL = URL(string: AppDelegate.TVBootURL) else {
            fatalError("unable to create NSURL")
        }
        appControllerContext.javaScriptApplicationURL = javaScriptURL
        appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseURL
        if let uuid = defaults.object(forKey: "uuid") as? String{
            print("My uuid is \(uuid)")
            appControllerContext.launchOptions["UUID"] = uuid
        } else{
            let newUUID = UUID().uuidString
            defaults.set(newUUID, forKey: "uuid")
            appControllerContext.launchOptions["UUID"] = newUUID
        }
        
        // 3
        appController = TVApplicationController(context: appControllerContext, window: window, delegate: self)
        
        return true
    }
}

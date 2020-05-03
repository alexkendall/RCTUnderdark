import Foundation

@objc(NetworkManagerEventEmitter)
public class NetworkManagerEventEmitter: RCTEventEmitter {
  
  override init() {
    super.init()
    EventEmitter.sharedInstance.registerEventEmitter(eventEmitter: self)
  }
  
  @objc override public func supportedEvents() -> [String]! {
    return EventEmitter.sharedInstance.allEvents
  }
}

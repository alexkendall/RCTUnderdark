class EventEmitter {

  /// Shared Instance.
  public static var sharedInstance = EventEmitter()

  private static var eventEmitter: NetworkManagerEventEmitter!

  private init() {}

  // When React Native instantiates the emitter it is registered here.
  func registerEventEmitter(eventEmitter: NetworkManagerEventEmitter) {
    EventEmitter.eventEmitter = eventEmitter
  }

  func dispatch(name: String, body: Any?) {
    EventEmitter.eventEmitter.sendEvent(withName: name, body: body)
  }

  /// All Events which must be support by React Native.
  lazy var allEvents: [String] = {
    var allEventNames: [String] = ["lostUser","detectedUser", "messageReceived", "connectedToUser", "receivedInvitation"]
    
    return allEventNames
  }()

}

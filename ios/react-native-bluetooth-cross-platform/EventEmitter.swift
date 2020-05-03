class EventEmitter {

    public static var sharedInstance = EventEmitter()

    private static var eventEmitter: NetworkManagerEventEmitter!

    private init() {}

    func registerEventEmitter(eventEmitter: NetworkManagerEventEmitter) {
      EventEmitter.eventEmitter = eventEmitter
    }

    func dispatch(name: String, body: Any?) {
      EventEmitter.eventEmitter.sendEvent(withName: name, body: body)
    }

    lazy var allEvents: [String] = {        
        return ["lostUser","detectedUser", "messageReceived", "connectedToUser", "receivedInvitation"]
    }()

}

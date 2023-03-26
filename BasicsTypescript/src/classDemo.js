var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Room = /** @class */ (function () {
    function Room(room) {
        this.room = room;
        this.family = [];
        this.dobShikha = '1982-12-12';
        this.dobHriday = '2013-12-12';
    }
    Room.prototype.addFamilyMember = function (member) {
        this.family.push(member);
    };
    Room.prototype.showFamily = function () {
        console.log(this.family);
    };
    return Room;
}());
var OyoRoom = /** @class */ (function (_super) {
    __extends(OyoRoom, _super);
    function OyoRoom(room, roomRent) {
        var _this = _super.call(this, room) || this;
        _this.roomRent = roomRent;
        _this.reports = [];
        return _this;
    }
    OyoRoom.prototype.cleanRoom = function (soap) {
        console.log("".concat(this.room, "'s Oyo Room cleaned with ").concat(soap));
    };
    Object.defineProperty(OyoRoom.prototype, "allReports", {
        get: function () {
            return this.reports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OyoRoom.prototype, "newReport", {
        set: function (report) {
            this.reports.push(report);
        },
        enumerable: false,
        configurable: true
    });
    OyoRoom.createRoom = function (room) {
        return { room: room };
    };
    OyoRoom.prototype.addFamilyMember = function (member) {
        if (member === 'Kapil')
            return;
        this.family.push(member);
    };
    OyoRoom.prototype.changeRoomRent = function (rent) {
        this.roomRent = rent;
    };
    OyoRoom.prototype.showRoomRent = function () {
        console.log("".concat(this.room, "'s room rent is ").concat(this.roomRent));
    };
    OyoRoom.currentYear = 2022;
    return OyoRoom;
}(Room));
var TreboHotel = /** @class */ (function (_super) {
    __extends(TreboHotel, _super);
    function TreboHotel(room, roomRent) {
        var _this = _super.call(this, room) || this;
        _this.roomRent = roomRent;
        return _this;
    }
    TreboHotel.getInstance = function () {
        if (!TreboHotel.instance) {
            TreboHotel.instance = new TreboHotel('Trebo', 1000);
        }
        return TreboHotel.instance;
    };
    TreboHotel.prototype.cleanRoom = function (soap) {
        console.log("".concat(this.room, "'s Trebo Room cleaned with ").concat(soap));
    };
    return TreboHotel;
}(Room));
var vijay = TreboHotel.getInstance();
console.log(vijay);
var rohit = OyoRoom.createRoom('Rohit');
console.log(rohit);
console.log(OyoRoom.currentYear);
var shekar = new OyoRoom('Shekar', 1000);
var shobha = new OyoRoom('Shobha', 1000);
var kapil = new OyoRoom('Shobha', 1000);
shekar.newReport = 'Year End Report';
console.log(shekar.allReports);
shekar.addFamilyMember('Shekar');
shekar.addFamilyMember('Shobha');
shekar.addFamilyMember('Kapil');
shekar.showFamily();
shekar.showRoomRent();
shekar.changeRoomRent(2000);
shekar.showRoomRent();
shekar.cleanRoom('Phenyl');
// const nab = new Room('Nabendu');
// const shi = new Room('Shikha');
// const hri = new Room('Hriday');
// const mou = new Room('Mousam');
// nab.dobShikha;
// nab.addFamilyMember('Nabendu');
// nab.addFamilyMember('Shikha');
// nab.addFamilyMember('Hriday');
// mou.cleanRoom('Lizol');
// nab.showFamily();

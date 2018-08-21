var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import config from '~/app/config';
import axios from "axios";
var axiosClient = axios.create({
    baseURL: config.api.url,
});
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["POST"] = "post";
    RequestMethod["GET"] = "get";
})(RequestMethod || (RequestMethod = {}));
var ApiService = (function () {
    function ApiService() {
    }
    ApiService.sendContactForm = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.call(RequestMethod.POST, 'contact/send', {
                            name: model.name,
                            email: model.email,
                            message: model.message,
                            captcha: model.captcha,
                        })];
                    case 1: return [2, (_a.sent()).data];
                }
            });
        });
    };
    ApiService.getProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            var projects, projectModels, k;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.call(RequestMethod.GET, 'projects')];
                    case 1:
                        projects = (_a.sent()).data;
                        projectModels = [];
                        for (k in projects) {
                            projectModels.push(projects[k]);
                        }
                        return [2, projectModels];
                }
            });
        });
    };
    ApiService.getPortfolioData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.call(RequestMethod.GET, 'getData')];
                    case 1: return [2, (_a.sent()).data];
                }
            });
        });
    };
    ApiService.getTechGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            var techGroups, techGroupModels, k;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.call(RequestMethod.GET, 'techGroups')];
                    case 1:
                        techGroups = (_a.sent()).data;
                        techGroupModels = [];
                        for (k in techGroups) {
                            techGroupModels.push(techGroups[k]);
                        }
                        return [2, techGroupModels];
                }
            });
        });
    };
    ApiService.getTechStacks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var techStacks, techStackModels, k;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.call(RequestMethod.GET, 'techStacks')];
                    case 1:
                        techStacks = (_a.sent()).data;
                        techStackModels = [];
                        for (k in techStacks) {
                            techStackModels.push(techStacks[k]);
                        }
                        return [2, techStackModels];
                }
            });
        });
    };
    ApiService.call = function (method, url, params) {
        if (params === void 0) { params = {}; }
        try {
            if (method === RequestMethod.POST) {
                return axiosClient.post(url, params);
            }
            return axiosClient.get(url, params);
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    };
    return ApiService;
}());
export { ApiService };

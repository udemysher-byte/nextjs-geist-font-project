(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/CartContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartProvider": (()=>CartProvider),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// Cart reducer
const cartReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            {
                const existingItem = state.items.find((item)=>item.id === action.payload.id);
                if (existingItem) {
                    const updatedItems = state.items.map((item)=>item.id === action.payload.id ? {
                            ...item,
                            quantity: item.quantity + 1
                        } : item);
                    return {
                        items: updatedItems,
                        total: calculateTotal(updatedItems)
                    };
                } else {
                    const newItems = [
                        ...state.items,
                        {
                            ...action.payload,
                            quantity: 1
                        }
                    ];
                    return {
                        items: newItems,
                        total: calculateTotal(newItems)
                    };
                }
            }
        case 'REMOVE_ITEM':
            {
                const filteredItems = state.items.filter((item)=>item.id !== action.payload);
                return {
                    items: filteredItems,
                    total: calculateTotal(filteredItems)
                };
            }
        case 'UPDATE_QUANTITY':
            {
                if (action.payload.quantity <= 0) {
                    const filteredItems = state.items.filter((item)=>item.id !== action.payload.id);
                    return {
                        items: filteredItems,
                        total: calculateTotal(filteredItems)
                    };
                }
                const updatedItems = state.items.map((item)=>item.id === action.payload.id ? {
                        ...item,
                        quantity: action.payload.quantity
                    } : item);
                return {
                    items: updatedItems,
                    total: calculateTotal(updatedItems)
                };
            }
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0
            };
        default:
            return state;
    }
};
// Helper function to calculate total
const calculateTotal = (items)=>{
    return items.reduce((total, item)=>total + item.price * item.quantity, 0);
};
// Create context
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const CartProvider = ({ children })=>{
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, {
        items: [],
        total: 0
    });
    const addItem = (product)=>{
        dispatch({
            type: 'ADD_ITEM',
            payload: product
        });
    };
    const removeItem = (productId)=>{
        dispatch({
            type: 'REMOVE_ITEM',
            payload: productId
        });
    };
    const updateQuantity = (productId, quantity)=>{
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                id: productId,
                quantity
            }
        });
    };
    const clearCart = ()=>{
        dispatch({
            type: 'CLEAR_CART'
        });
    };
    const getItemCount = ()=>{
        return state.items.reduce((count, item)=>count + item.quantity, 0);
    };
    const value = {
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/CartContext.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
};
_s(CartProvider, "Vp+oVaXCHsbaLFwgBOsAtYS3HBE=");
_c = CartProvider;
const useCart = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_CartContext_tsx_1f7e3b7a._.js.map
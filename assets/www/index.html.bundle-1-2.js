				console.log("line 1 of bundle 1-2");


montageDefine("0fe37da", "ui/composer/translate-composer", {
	dependencies: ["montage", "ui/composer/composer", "core/event/event-manager"],
	factory: function(e, t, n) {

						console.log("line 5 of bundle 1-2");

		var r = e("montage").Montage,
			i = e("ui/composer/composer").Composer,
			s = e("core/event/event-manager").defaultEventManager,
			o = t.TranslateComposer = r.create(i, {
				_NATIVE_ELEMENTS: {
					value: ["A", "IFRAME", "EMBED", "OBJECT", "VIDEO", "AUDIO", "CANVAS", "LABEL", "INPUT", "BUTTON", "SELECT", "TEXTAREA", "KEYGEN", "DETAILS", "COMMAND"]
				},
				_WHEEL_POINTER: {
					value: "wheel",
					writable: !1
				},
				_externalUpdate: {
					value: !0
				},
				isAnimating: {
					value: !1
				},
				frame: {
					value: function(e) {
						this.isAnimating && this._animationInterval(), this._externalUpdate = !1
					}
				},
				_pointerSpeedMultiplier: {
					value: 1
				},
				pointerSpeedMultiplier: {
					get: function() {
						return this._pointerSpeedMultiplier
					},
					set: function(e) {
						this._pointerSpeedMultiplier = e
					}
				},
				pointerStartEventPosition: {
					value: null
				},
				_shouldDispatchTranslate: {
					value: !1
				},
				_isSelfUpdate: {
					value: !1
				},
				_allowFloats: {
					value: !1
				},
				allowFloats: {
					get: function() {
						return this._allowFloats
					},
					set: function(e) {
						this._allowFloats !== e && (this._allowFloats = e, this.translateX = this._translateX, this.translateY = this._translateY)
					}
				},
				_translateX: {
					value: 0
				},
				translateX: {
					get: function() {
						return this._translateX
					},
					set: function(e) {
						if (this._axis === "vertical") this._translateX = this._minTranslateX || 0;
						else {
							var t = isNaN(e) ? 0 : this._allowFloats ? parseFloat(e) : e >> 0;
							this._minTranslateX !== null && t < this._minTranslateX && (t = this._minTranslateX), this._maxTranslateX !== null && t > this._maxTranslateX && (t = this._maxTranslateX), this._isSelfUpdate || (this.isAnimating = !1), this._translateX = t
						}
					}
				},
				_translateY: {
					value: 0
				},
				translateY: {
					get: function() {
						return this._translateY
					},
					set: function(e) {
						if (this._axis === "horizontal") this._translateY = this._minTranslateY || 0;
						else {
							var t = isNaN(e) ? 0 : this._allowFloats ? parseFloat(e) : e >> 0;
							this._minTranslateY !== null && t < this._minTranslateY && (t = this._minTranslateY), this._maxTranslateY !== null && t > this._maxTranslateY && (t = this._maxTranslateY), this._isSelfUpdate || (this.isAnimating = !1), this._translateY = t
						}
					}
				},
				_minTranslateX: {
					value: null
				},
				minTranslateX: {
					get: function() {
						return this._minTranslateX
					},
					set: function(e) {
						e !== null && (e = parseFloat(e)), this._minTranslateX != e && (e !== null && this._translateX < e && (this.translateX = e), this._minTranslateX = e)
					}
				},
				_maxTranslateX: {
					value: null
				},
				maxTranslateX: {
					get: function() {
						return this._maxTranslateX
					},
					set: function(e) {
						e !== null && (e = parseFloat(e)), this._maxTranslateX != e && (e !== null && this._translateX > e && (this.translateX = e), this._maxTranslateX = e)
					}
				},
				_minTranslateY: {
					value: null
				},
				minTranslateY: {
					get: function() {
						return this._minTranslateY
					},
					set: function(e) {
						e !== null && (e = parseFloat(e)), this._minTranslateY != e && (e !== null && this._translateY < e && (this.translateY = e), this._minTranslateY = e)
					}
				},
				_maxTranslateY: {
					value: null
				},
				maxTranslateY: {
					get: function() {
						return this._maxTranslateY
					},
					set: function(e) {
						e !== null && (e = parseFloat(e)), this._maxTranslateY != e && (e !== null && this._translateY > e && (this.translateY = e), this._maxTranslateY = e)
					}
				},
				_axis: {
					value: "both"
				},
				axis: {
					get: function() {
						return this._axis
					},
					set: function(e) {
						switch (e) {
							case "vertical":
							case "horizontal":
								this._axis = e, this.translateX = this._translateX, this.translateY = this._translateY;
								break;
							default:
								this._axis = "both"
						}
					}
				},
				invertAxis: {
					depends: ["invertXAxis", "invertYAxis"],
					get: function() {
						return this._invertXAxis === this._invertYAxis ? this._invertXAxis : null
					},
					set: function(e) {
						this.invertXAxis = e, this.invertYAxis = e
					}
				},
				_invertXAxis: {
					value: !1
				},
				invertXAxis: {
					get: function() {
						return this._invertXAxis
					},
					set: function(e) {
						this._invertXAxis = !! e
					}
				},
				_invertYAxis: {
					value: !1
				},
				invertYAxis: {
					get: function() {
						return this._invertYAxis
					},
					set: function(e) {
						this._invertYAxis = !! e
					}
				},
				startTranslateSpeed: {
					value: 500
				},
				startTranslateRadius: {
					value: 8
				},
				_hasMomentum: {
					value: !0
				},
				hasMomentum: {
					get: function() {
						return this._hasMomentum
					},
					set: function(e) {
						this._hasMomentum = e ? !0 : !1
					}
				},
				__momentumDuration: {
					value: 650
				},
				_momentumDuration: {
					get: function() {
						return this.__momentumDuration
					},
					set: function(e) {
						this.__momentumDuration = isNaN(e) ? 1 : e >> 0, this.__momentumDuration < 1 && (this.__momentumDuration = 1)
					}
				},
				_pointerX: {
					value: null
				},
				_pointerY: {
					value: null
				},
				_touchIdentifier: {
					value: null
				},
				_isFirstMove: {
					value: !1
				},
				_start: {
					value: function(e, t, n) {
						this.pointerStartEventPosition = {
							pageX: e,
							pageY: t,
							target: n
						}, this._pointerX = e, this._pointerY = t, window.Touch ? (document.addEventListener("touchend", this, !0), document.addEventListener("touchmove", this, !0)) : (document.addEventListener("mouseup", this, !0), document.addEventListener("mousemove", this, !0)), this.isAnimating = !1, this._isFirstMove = !0
					}
				},
				_observedPointer: {
					value: null
				},
				_shouldPreventDefault: {
					value: function(e) {
						return !!e.target.tagName && o._NATIVE_ELEMENTS.indexOf(e.target.tagName) === -1 && !e.target.isContentEditable
					}
				},
				captureMousedown: {
					value: function(e) {
						if (e.button !== 0) return;
						this._shouldPreventDefault(e) && e.preventDefault(), this._observedPointer = "mouse", this._start(e.clientX, e.clientY, e.target)
					}
				},
				handleMousedown: {
					value: function(e) {
						e.button === 0 && !this.eventManager.componentClaimingPointer(this._observedPointer) && this.eventManager.claimPointer(this._observedPointer, this)
					}
				},
				captureMousemove: {
					value: function(e) {
						this.eventManager.isPointerClaimedByComponent(this._observedPointer, this) ? (e.preventDefault(), this._move(e.clientX, e.clientY)) : this.axis !== "both" ? this._analyzeMovement(e) : this._stealPointer() && (e.preventDefault(), this._move(e.clientX, e.clientY))
					}
				},
				captureMouseup: {
					value: function(e) {
						this._end(e)
					}
				},
				_releaseInterest: {
					value: function() {
						window.Touch ? (document.removeEventListener("touchend", this, !0), document.removeEventListener("touchmove", this, !0)) : (document.removeEventListener("mouseup", this, !0), document.removeEventListener("mousemove", this, !0)), this.eventManager.isPointerClaimedByComponent(this._observedPointer, this) && this.eventManager.forfeitPointer(this._observedPointer, this), this._observedPointer = null
					}
				},
				captureTouchstart: {
					value: function(e) {
						this._shouldPreventDefault(e) && e.preventDefault();
						if (this._observedPointer !== null && this.eventManager.isPointerClaimedByComponent(this._observedPointer, this)) return;
						e.targetTouches.length === 1 && (this._observedPointer = e.targetTouches[0].identifier, this._start(e.targetTouches[0].clientX, e.targetTouches[0].clientY, e.targetTouches[0].target))
					}
				},
				handleTouchstart: {
					value: function(e) {
						this.eventManager.componentClaimingPointer(this._observedPointer) || e.targetTouches.length === 1 && (this._shouldPreventDefault(e) && e.preventDefault(), this.eventManager.claimPointer(this._observedPointer, this))
					}
				},
				captureTouchmove: {
					value: function(e) {
						var t = 0,
							n = e.changedTouches.length;
						while (t < n && e.changedTouches[t].identifier !== this._observedPointer) t++;
						t < n && (this.eventManager.isPointerClaimedByComponent(this._observedPointer, this) ? (e.preventDefault(), this._move(e.changedTouches[t].clientX, e.changedTouches[t].clientY)) : this._analyzeMovement(e.changedTouches[t]))
					}
				},
				captureTouchend: {
					value: function(e) {
									console.log("line 291 of bundle 1-2");
						var t = 0,
							n = e.changedTouches.length;
						while (t < n && e.changedTouches[t].identifier !== this._observedPointer) t++;
						t < n && this._end(e.changedTouches[t])
					}
				},
				_analyzeMovement: {
					value: function(e) {
						var t = e.velocity;
						if (!t) return;
						var n = .7853981633974483,
							r = 2.356194490192345,
							i = -2.356194490192345,
							s = -0.7853981633974483,
							o, u, a, f, l, c, h, p;
						c = t.speed;
						if (0 === t.speed || isNaN(t.speed)) return;
						l = t.angle, "horizontal" === this.axis ? (a = l <= n && l >= s, f = l >= r || l <= i, (a || f) && this._stealPointer()) : "vertical" === this.axis ? (o = l <= s && l >= i, u = l >= n && l <= r, (o || u) && this._stealPointer()) : c >= this.startTranslateSpeed ? this._stealPointer() : (h = this.pointerStartEventPosition.pageX - e.pageX, p = this.pointerStartEventPosition.pageY - e.pageY, h * h + p * p > this.startTranslateRadius * this.startTranslateRadius && this._stealPointer())
					}
				},
				_stealPointer: {
					value: function() {
						return this.eventManager.claimPointer(this._observedPointer, this)
					}
				},
				_translateEndTimeout: {
					value: null
				},
				captureMousewheel: {
					value: function(e) {
						this.eventManager.componentClaimingPointer(this._WHEEL_POINTER) || this.eventManager.claimPointer(this._WHEEL_POINTER, this.component)
					}
				},
				handleMousewheel: {
					value: function(e) {
						var t = this;
						if (this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER, this.component)) {
							var n = this._translateY;
							this._dispatchTranslateStart(), this.translateY = this._translateY - e.wheelDeltaY * 20 / 120, this._dispatchTranslate(), window.clearTimeout(this._translateEndTimeout), this._translateEndTimeout = window.setTimeout(function() {
								t._dispatchTranslateEnd()
							}, 400), n !== this._translateY && this._shouldPreventDefault(e) && e.preventDefault(), this.eventManager.forfeitPointer(this._WHEEL_POINTER, this.component)
						}
					}
				},
				_move: {
					value: function(e, t) {
						var n;
						this._isFirstMove && (this._dispatchTranslateStart(this._translateX, this._translateY), this._isFirstMove = !1), this._isSelfUpdate = !0, this._axis != "vertical" && (n = this._invertXAxis ? this._pointerX - e : e - this._pointerX, this.translateX += n * this._pointerSpeedMultiplier), this._axis != "horizontal" && (n = this._invertYAxis ? this._pointerY - t : t - this._pointerY, this.translateY += n * this._pointerSpeedMultiplier), this._isSelfUpdate = !1, this._pointerX = e, this._pointerY = t, this._shouldDispatchTranslate && this._dispatchTranslate()
					}
				},
				_bezierTValue: {
					value: function(e, t, n, r, i) {
						var s = 1 - 3 * r + 3 * t,
							o = 3 * r - 6 * t,
							u = 3 * t,
							a = .5,
							f, l, c, h;
						for (l = 0; l < 10; l++) h = a * a, f = 3 * s * h + 2 * o * a + u, c = 1 - a, a -= (3 * (c * c * a * t + c * h * r) + h * a - e) / f;
						return h = a * a, c = 1 - a, 3 * (c * c * a * n + c * h * i) + h * a
					}
				},
				_dispatchTranslateStart: {
					value: function(e, t) {
						var n = document.createEvent("CustomEvent");
						n.initCustomEvent("translateStart", !0, !0, null), n.translateX = e, n.translateY = t, this.dispatchEvent(n)
					}
				},
				_dispatchTranslateEnd: {
					value: function() {
						var e = document.createEvent("CustomEvent");
						e.initCustomEvent("translateEnd", !0, !0, null), e.translateX = this._translateX, e.translateY = this._translateY, this.dispatchEvent(e)
					}
				},
				_dispatchTranslate: {
					value: function() {
						var e = document.createEvent("CustomEvent");
						e.initCustomEvent("translate", !0, !0, null), e.translateX = this._translateX, e.translateY = this._translateY, this.dispatchEvent(e)
					}
				},
				animateBouncingX: {
					value: !1,
					enumerable: !1
				},
				startTimeBounceX: {
					value: !1,
					enumerable: !1
				},
				animateBouncingY: {
					value: !1,
					enumerable: !1
				},
				startTimeBounceY: {
					value: !1,
					enumerable: !1
				},
				animateMomentum: {
					value: !1,
					enumerable: !1
				},
				startTime: {
					value: null,
					enumerable: !1
				},
				startX: {
					value: null,
					enumerable: !1
				},
				posX: {
					value: null,
					enumerable: !1
				},
				endX: {
					value: null,
					enumerable: !1
				},
				startY: {
					value: null,
					enumerable: !1
				},
				posY: {
					value: null,
					enumerable: !1
				},
				endY: {
					value: null,
					enumerable: !1
				},
				translateStrideX: {
					value: null
				},
				translateStrideY: {
					value: null
				},
				translateStrideDuration: {
					value: 330
				},
				_animationInterval: {
					value: function() {
						var e = Date.now(),
							t, n, r, i, s = !1;
						this.animateMomentum && (t = e - this.startTime, t < this.__momentumDuration ? (this.posX = this.startX - (this.momentumX + this.momentumX * (this.__momentumDuration - t) / this.__momentumDuration) * t / 1e3 / 2, this.posY = this.startY - (this.momentumY + this.momentumY * (this.__momentumDuration - t) / this.__momentumDuration) * t / 1e3 / 2, this.translateStrideX && this.startStrideXTime === null && (this.__momentumDuration - t < this.translateStrideDuration || Math.abs(this.posX - this.endX) < this.translateStrideX * .75) && (this.startStrideXTime = e), this.translateStrideY && this.startStrideYTime === null && (this.__momentumDuration - t < this.translateStrideDuration || Math.abs(this.posY - this.endY) < this.translateStrideY * .75) && (this.startStrideYTime = e)) : this.animateMomentum = !1), n = Math.round(this.endX / this.translateStrideX), this.startStrideXTime && e - this.startStrideXTime > 0 && (e - this.startStrideXTime < this.translateStrideDuration ? (t = this._bezierTValue((e - this.startStrideXTime) / this.translateStrideDuration, .275, 0, .275, 1), this.posX = this.posX * (1 - t) + n * this.translateStrideX * t, s = !0) : this.posX = n * this.translateStrideX), n = Math.round(this.endY / this.translateStrideY), this.startStrideYTime && e - this.startStrideYTime > 0 && (e - this.startStrideYTime < this.translateStrideDuration ? (t = this._bezierTValue((e - this.startStrideYTime) / this.translateStrideDuration, .275, 0, .275, 1), this.posY = this.posY * (1 - t) + n * this.translateStrideY * t, s = !0) : this.posY = n * this.translateStrideY), r = this.posX, i = this.posY, this._isSelfUpdate = !0, this.translateX = r, this.translateY = i, this._isSelfUpdate = !1, this.isAnimating = this.animateMomentum || s, this.isAnimating ? this.needsFrame = !0 : this._dispatchTranslateEnd()
					}
				},
				_end: {
					value: function(e) {
						this.startTime = Date.now(), this.endX = this.posX = this.startX = this._translateX, this.endY = this.posY = this.startY = this._translateY, this._hasMomentum && (e.velocity.speed > 40 || this.translateStrideX || this.translateStrideY) ? (this._axis != "vertical" ? this.momentumX = e.velocity.x * this._pointerSpeedMultiplier * (this._invertXAxis ? 1 : -1) : this.momentumX = 0, this._axis != "horizontal" ? this.momentumY = e.velocity.y * this._pointerSpeedMultiplier * (this._invertYAxis ? 1 : -1) : this.momentumY = 0, this.endX = this.startX - this.momentumX * this.__momentumDuration / 2e3, this.endY = this.startY - this.momentumY * this.__momentumDuration / 2e3, this.startStrideXTime = null, this.startStrideYTime = null, this.animateMomentum = !0) : this.animateMomentum = !1, this.animateMomentum ? this._animationInterval() : this._isFirstMove || this._dispatchTranslateEnd(), this._releaseInterest()
					}
				},
				surrenderPointer: {
					value: function(e, t) {
						return !0
					}
				},
				eventManager: {
					get: function() {
						return s
					}
				},
				load: {
					value: function() {
						window.Touch ? (this._element.addEventListener("touchstart", this, !0), this._element.addEventListener("touchstart", this, !1)) : (this._element.addEventListener("mousedown", this, !0), this._element.addEventListener("mousedown", this, !1), this._element.addEventListener("mousewheel", this, !1), this._element.addEventListener("mousewheel", this, !0)), this.eventManager.isStoringPointerEvents = !0
					}
				},
				addEventListener: {
					value: function(e, t, n) {
						i.addEventListener.call(this, e, t, n), e === "translate" && (this._shouldDispatchTranslate = !0)
					}
				}
			})
	}
}), montageDefine("0fe37da", "ui/controller/array-controller", {
	dependencies: ["montage", "ui/controller/object-controller", "core/change-notification", "ui/controller/array-controller"],
	factory: function(e, t, n) {
		var r = e("montage").Montage,
			i = e("ui/controller/object-controller").ObjectController,
			s = e("core/change-notification").ChangeNotification,
			o = t.ArrayController = r.create(i, {
				didCreate: {
					value: function() {
						var e = this;
						this.addPropertyChangeListener("selections", function() {
							var t = [];
							e._selections.forEach(function(e, n) {
								e && t.push(n)
							}), e.selectedIndexes = t
						}), this.addPropertyChangeListener("content", function() {
							e.selectedObjects = null, e.automaticallyOrganizeObjects && e.organizeObjects()
						})
					}
				},
				_content: {
					value: null
				},
				content: {
					get: function() {
						return this._content
					},
					set: function(e) {
						if (this._content === e) return;
						this._content = e
					}
				},
				delegate: {
					value: null
				},
				_organizedObjects: {
					distinct: !0,
					value: []
				},
				organizedObjects: {
					get: function() {
						return this._organizedObjects
					}
				},
				automaticallyOrganizeObjects: {
					value: !0
				},
				_sortFunction: {
					value: null
				},
				sortFunction: {
					get: function() {
						return this._sortFunction
					},
					set: function(e) {
						if (this._sortFunction === e) return;
						this._sortFunction = e, this.automaticallyOrganizeObjects && this.organizeObjects()
					}
				},
				_filterFunction: {
					value: null
				},
				filterFunction: {
					get: function() {
						return this._filterFunction
					},
					set: function(e) {
						if (this._filterFunction === e) return;
						this._filterFunction = e, this.automaticallyOrganizeObjects && this.organizeObjects()
					}
				},
				_startIndex: {
					value: null
				},
				startIndex: {
					get: function() {
						return this._startIndex
					},
					set: function(e) {
						if (this._startIndex === e) return;
						this._startIndex = e, this.automaticallyOrganizeObjects && this.organizeObjects()
					}
				},
				_endIndex: {
					enumerable: !1,
					value: null
				},
				endIndex: {
					get: function() {
						return this._endIndex
					},
					set: function(e) {
						if (this._endIndex === e) return;
						this._endIndex = e, this.automaticallyOrganizeObjects && this.organizeObjects()
					}
				},
				_organizedObjectsIndexes: {
					value: null
				},
				_rangedOrganizedObjectsIndexes: {
					value: null
				},
				_selectedIndexes: {
					value: null
				},
				selectedIndexes: {
					get: function() {
						return this._selectedIndexes ? this._selectedIndexes : this.selectedContentIndexes ? this._selectedIndexes = this._convertIndexesFromContentToOrganized(this.selectedContentIndexes) : null
					},
					set: function(e) {
						if (this.selectedIndexes !== e) {
							var t = e ? this._convertIndexesFromOrganizedToContent(e) : null,
								n = null;
							if (this.delegate && typeof this.delegate.shouldChangeSelection == "function") {
								t && (n = this.content.filter(function(e, n) {
									return t.indexOf(n) >= 0
								}, this));
								if (this.delegate.shouldChangeSelection(this, n, this._selectedObjects) === !1) return
							}
							this.dispatchPropertyChange("selections", "selectedContentIndexes", "selectedObjects", function() {
								this._selectedIndexes = e, this._selectedContentIndexes = t, this._selectedObjects = null, this._selections = null
							})
						}
					}
				},
				_convertIndexesFromOrganizedToContent: {
					value: function(e) {
						var t, n = [],
							r, i = e.length,
							s, o;
						r = this._rangedOrganizedObjectsIndexes ? this._rangedOrganizedObjectsIndexes : this._organizedObjectsIndexes;
						if (r) {
							o = r.length;
							for (t = 0; t < i; t++) s = e[t], s < o && s >= 0 && (n[n.length] = r[s])
						} else
							for (t = 0; t < i; t++) n[n.length] = e[t] + this.startIndex;
						return n.sort()
					}
				},
				_convertIndexesFromContentToOrganized: {
					value: function(e) {
						var t, n = [],
							r, i = e.length,
							s;
						r = this._rangedOrganizedObjectsIndexes ? this._rangedOrganizedObjectsIndexes : this._organizedObjectsIndexes;
						if (r)
							for (t = 0; t < i; t++) s = e[t], s >= 0 && (s = r.indexOf(s), s !== -1 && (n[n.length] = s));
						else
							for (t = 0; t < i; t++) s = e[t] - this.startIndex, s > -1 && (this.endIndex == null || s < this.endIndex) && (n[n.length] = s);
						return n.sort()
					}
				},
				organizeObjects: {
					value: function() {
						var e = this.content,
							t = this.filterFunction,
							n = this.sortFunction,
							r = 0,
							i = 0,
							s, o, u, a;
						e && typeof t == "function" && (s = [], e = e.filter(function(e) {
							var n = t.call(this, e);
							return n && (s[i] = r, i++), r++, n
						}, this));
						if (typeof n == "function") {
							o = [], u = [], r = 0;
							for (r = 0; a = e[r]; r++) a !== null && typeof a == "object" ? (a._montage_array_controller_index = r, u[r] = a) : u[r] = {
								_montage_array_controller_index: r,
								_montage_array_controller_value: a
							};
							u = u.sort(function(e, t) {
								return e._montage_array_controller_value && (e = e._montage_array_controller_value), t._montage_array_controller_value && (t = t._montage_array_controller_value), n.call(this, e, t)
							}), e = [];
							for (r = 0; a = u[r]; r++) i = a._montage_array_controller_index, o[r] = s ? s[i] : i, a._montage_array_controller_value ? e[r] = a._montage_array_controller_value : (e[r] = a, delete a._montage_array_controller_index);
							this._organizedObjectsIndexes = o
						} else this._organizedObjectsIndexes = s;
						this._applyRangeIfNeeded(e)
					}
				},
				_applyRangeIfNeeded: {
					value: function(e) {
						var t = this.startIndex,
							n = this.endIndex;
						e && (typeof t == "number" || typeof n == "number") && (t = typeof t == "number" && t >= 0 ? t : 0, n = typeof n == "number" && n < e.length ? n : e.length, e = e.slice(t, n), this._organizedObjectsIndexes ? this._rangedOrganizedObjectsIndexes = this._organizedObjectsIndexes.slice(t, n) : this._rangedOrganizedObjectsIndexes = null), this.dispatchPropertyChange("organizedObjects", function() {
							this._organizedObjects = e ? e : []
						})
					}
				},
				_selectedObjects: {
					value: null
				},
				selectedObjects: {
					get: function() {
						return this._selectedObjects ? this._selectedObjects : this._selectedContentIndexes ? (this.content && (this._selectedObjects = this.content.filter(function(e, t) {
							return this._selectedContentIndexes.indexOf(t) >= 0
						}, this)), this._selectedObjects) : null
					},
					set: function(e) {
						e === null || typeof e == "undefined" ? e = null : Array.isArray(e) || (e = [e]);
						if (this.selectedObjects === e) return;
						if (this.delegate && typeof this.delegate.shouldChangeSelection == "function" && this.delegate.shouldChangeSelection(this, e, this._selectedObjects) === !1) return;
						this.dispatchPropertyChange("selections", "selectedContentIndexes", "selectedIndexes", function() {
							this._selectedObjects = e, this._selectedContentIndexes = null, this._selectedIndexes = null, this._selections = null
						})
					}
				},
				_selectedContentIndexes: {
					value: null
				},
				selectedContentIndexes: {
					get: function() {
						if (this._selectedContentIndexes) return this._selectedContentIndexes;
						if (!this._selectedObjects) return null;
						this._selectedContentIndexes = [];
						var e;
						return this._selectedObjects.forEach(function(t) {
							(e = this.content.indexOf(t)) !== -1 && this._selectedContentIndexes.push(e)
						}, this), this._selectedContentIndexes
					},
					set: function(e) {
						e === null || e === !1 || typeof e == "undefined" ? e = null : Array.isArray(e) || (e = [e]);
						if (this.selectedContentIndexes === e) return;
						if (this.delegate && typeof this.delegate.shouldChangeSelection == "function") {
							var t = e,
								n = null;
							t && (n = this.content.filter(function(e, n) {
								return t.indexOf(n) >= 0
							}, this));
							if (this.delegate.shouldChangeSelection(this, n, this._selectedObjects) === !1) return
						}
						this._selectedContentIndexes = e, this.dispatchPropertyChange("selections", "selectedIndexes", "selectedObjects", function() {
							this._selectedIndexes = null, this._selectedObjects = null, this._selections = null
						})
					}
				},
				_selections: {
					value: null
				},
				selections: {
					get: function() {
						if (!this._selections) {
							this._selections = new Array(this._organizedObjects.length);
							if (this.selectedIndexes) {
								var e = this._selections,
									t = this.selectedIndexes,
									n = t.length,
									r, i;
								for (r = 0; r < n; r++) i = t[r], i < e.length && (e[i] = !0)
							}
						}
						return this._selections
					}
				},
				initWithContent: {
					value: function(e) {
						return this.content = e, this
					}
				},
				selectObjectsOnAddition: {
					value: !1
				},
				clearFilterFunctionOnAddition: {
					value: !0
				},
				add: {
					value: function() {
						var e = this.newObject();
						this.content.push(e), this.selectObjectsOnAddition && (this.selectedContentIndexes = [this.content.length - 1]), this.clearFilterFunctionOnAddition && (this.filterFunction = null), this.automaticallyOrganizeObjects && this.organizeObjects()
					}
				},
				addObjects: {
					value: function() {
						var e = Array.prototype.slice.call(arguments),
							t, n = e.length,
							r, i, s = this.content;
						s ? s.push.apply(s, e) : this.content = s = e;
						if (this.selectObjectsOnAddition) {
							r = [], i = s.length - n;
							for (t = 0; t < n; t++) r[t] = i++;
							this.selectedContentIndexes = r, this.selectedObjects = e
						}
						this.clearFilterFunctionOnAddition && (this.filterFunction = null), this.automaticallyOrganizeObjects && this.organizeObjects()
					}
				},
				remove: {
					value: function() {
						var e;
						return this.selectedObjects && this.selectedObjects.length > 0 && (e = this.removeObjects.apply(this, this.selectedObjects), this.automaticallyOrganizeObjects && this.organizeObjects()), e
					}
				},
				removeObjects: {
					value: function() {
						var e = Array.prototype.slice.call(arguments),
							t;
						return t = this.content.filter(function(t) {
							return e.indexOf(t) < 0
						}), this.content = t, this.automaticallyOrganizeObjects && this.organizeObjects(), e
					}
				},
				removeObjectsAtSelectedIndexes: {
					value: function() {
						return this.removeObjectsAtIndexes(this.selectedIndexes)
					}
				},
				removeObjectsAtIndexes: {
					value: function(e) {
						var t, n;
						return e && e.length > 0 && (t = [], n = this.content.filter(function(n, r) {
							return e.indexOf(r) < 0 ? !0 : (t.push(n), !1)
						}), this.content = n, this.automaticallyOrganizeObjects && this.organizeObjects()), t
					}
				}
			})
	}
}), montageDefine("0fe37da", "ui/native/button.reel/button", {
	dependencies: ["montage", "ui/component", "ui/native-control", "ui/composer/press-composer"],
	factory: function(e, t, n) {
		var r = e("montage").Montage,
			i = e("ui/component").Component,
			s = e("ui/native-control").NativeControl,
			o = e("ui/composer/press-composer").PressComposer,
			u = t.Button = r.create(s, {
				_preventFocus: {
					enumerable: !1,
					value: !1
				},
				preventFocus: {
					get: function() {
						return this._preventFocus
					},
					set: function(e) {
						e === !0 ? this._preventFocus = !0 : this._preventFocus = !1
					}
				},
				enabled: {
					dependencies: ["disabled"],
					get: function() {
						return !this._disabled
					},
					set: function(e) {
						this.disabled = !e
					}
				},
				converter: {
					value: null
				},
				_labelNode: {
					value: undefined,
					enumerable: !1
				},
				_label: {
					value: undefined,
					enumerable: !1
				},
				label: {
					get: function() {
						return this._label
					},
					set: function(e) {
						if (e && e.length > 0 && this.converter) try {
							e = this.converter.convert(e), this.error && (this.error = null)
						} catch (t) {
							this.error = t
						}
						this._label = e, this._isInputElement && (this._value = e), this.needsDraw = !0
					}
				},
				setLabelInitialValue: {
					value: function(e) {
						this._label === undefined && (this._label = e)
					}
				},
				holdThreshold: {
					get: function() {
						return this._pressComposer.longPressThreshold
					},
					set: function(e) {
						this._pressComposer.longPressThreshold = e
					}
				},
				_pressComposer: {
					enumberable: !1,
					value: null
				},
				_active: {
					enumerable: !1,
					value: !1
				},
				active: {
					get: function() {
						return this._active
					},
					set: function(e) {
						this._active = e, this.needsDraw = !0
					}
				},
				blur: {
					value: function() {
						this._element.blur()
					}
				},
				focus: {
					value: function() {
						this._element.focus()
					}
				},
				didCreate: {
					value: function() {
						this._pressComposer = o.create(), this.addComposer(this._pressComposer)
					}
				},
				prepareForActivationEvents: {
					value: function() {
						this._pressComposer.addEventListener("pressStart", this, !1), this._pressComposer.addEventListener("press", this, !1), this._pressComposer.addEventListener("pressCancel", this, !1)
					}
				},
				addEventListener: {
					value: function(e, t, n) {
						s.addEventListener.call(this, e, t, n), e === "hold" && this._pressComposer.addEventListener("longPress", this, !1)
					}
				},
				handlePressStart: {
					value: function(e) {
						this.active = !0, e.touch && document.addEventListener("touchmove", this, !1), this._preventFocus || this._element.focus()
					}
				},
				handlePress: {
					value: function(e) {
						this.active = !1, this._dispatchActionEvent(), document.removeEventListener("touchmove", this, !1)
					}
				},
				handleKeyup: {
					value: function(e) {
						e.keyCode === 32 && (this.active = !1, this._dispatchActionEvent())
					}
				},
				handleLongPress: {
					value: function(e) {
						this._pressComposer.cancelPress();
						var t = document.createEvent("CustomEvent");
						t.initCustomEvent("hold", !0, !0, null), this.dispatchEvent(t)
					}
				},
				handlePressCancel: {
					value: function(e) {
						this.active = !1, document.removeEventListener("touchmove", this, !1)
					}
				},
				handleTouchmove: {
					value: function(e) {
						e.preventDefault()
					}
				},
				_isInputElement: {
					value: !1,
					enumerable: !1
				},
				willPrepareForDraw: {
					value: function() {
						s.willPrepareForDraw.call(this), this._element.setAttribute("role", "button"), this._isInputElement = this._element.tagName === "INPUT", this._isInputElement ? (Object.defineProperty(this, "value", {
							get: function() {
								return this._label
							},
							set: function(e) {
								this.label = e
							}
						}), this._label === undefined && (this._label = this._element.value)) : (this._element.firstChild || this._element.appendChild(document.createTextNode("")), this._labelNode = this._element.firstChild, this.setLabelInitialValue(this._labelNode.data), this._label === undefined && (this._label = this._labelNode.data)), this.needsDraw = !0
					}
				},
				prepareForDraw: {
					value: function() {
						this._element.addEventListener("keyup", this, !1)
					}
				},
				_drawLabel: {
					enumerable: !1,
					value: function(e) {
						this._isInputElement ? this._element.setAttribute("value", e) : this._labelNode.data = e
					}
				},
				draw: {
					value: function() {
						Object.getPrototypeOf(u).draw.call(this), this._disabled ? this._element.classList.add("disabled") : this._element.classList.remove("disabled"), this._active ? this._element.classList.add("active") : this._element.classList.remove("active"), this._drawLabel(this.label)
					}
				},
				_detail: {
					value: null
				},
				detail: {
					get: function() {
						return this._detail === null && (this._detail = a.create()), this._detail
					}
				},
				createActionEvent: {
					value: function() {
						var e = document.createEvent("CustomEvent"),
							t, n;
						if (t = this._detail) n = t._data;
						return e.initCustomEvent("action", !0, !0, n), e
					}
				}
			});
		u.addAttributes({
			autofocus: {
				value: !1,
				dataType: "boolean"
			},
			disabled: {
				value: !1,
				dataType: "boolean"
			},
			form: null,
			formaction: null,
			formenctype: null,
			formmethod: null,
			formnovalidate: {
				dataType: "boolean"
			},
			formtarget: null,
			type: {
				value: "button"
			},
			name: null,
			value: null
		});
		var a = r.create(r, {
			didCreate: {
				value: function() {
					this._data = Object.create(null)
				}
			},
			initWithReservedAndOptions: {
				value: function(e, t) {
					Map.call(this, e, t)
				}
			},
			get: {
				value: function(e) {
					return this.undefinedGet(e)
				}
			},
			set: {
				value: function(e, t) {
					this.undefinedSet(e, t)
				}
			},
			_data: {
				value: null
			},
			_defineProperty: {
				value: function(e, t) {
					t = typeof t != "undefined" ? t : null, r.defineProperty(this, e, {
						get: function() {
							return this._data[e]
						},
						set: function(t) {
							this._data[e] = t
						}
					}), this._data[e] = t
				}
			},
			undefinedGet: {
				value: function(e) {
					return typeof this._data[e] == "undefined" && this._defineProperty(e), this._data[e]
				}
			},
			undefinedSet: {
				value: function(e, t) {
					typeof this._data[e] == "undefined" ? this._defineProperty(e, t) : this._data[e] = t
				}
			}
		})
	}
}), montageDefine("0fe37da", "ui/toggle-button.reel/toggle-button", {
	dependencies: ["montage", "ui/component", "ui/button.reel"],
	factory: function(e, t, n) {
		var r = e("montage").Montage,
			i = e("ui/component").Component,
			s = e("ui/button.reel").Button,
			o = t.ToggleButton = r.create(s, {
				hasTemplate: {
					value: !0
				},
				_pressed: {
					value: !1
				},
				pressed: {
					get: function() {
						return this._pressed
					},
					set: function(e) {
						this._pressed = !! e, this._label = this._pressed ? this._pressedLabel : this._unpressedLabel, this.needsDraw = !0
					}
				},
				_unpressedLabel: {
					value: null
				},
				unpressedLabel: {
					get: function() {
						return this._unpressedLabel
					},
					set: function(e) {
						this._unpressedLabel = e, this._pressed || (this.label = this._unpressedLabel, this.needsDraw = !0)
					}
				},
				_pressedLabel: {
					value: null
				},
				pressedLabel: {
					get: function() {
						return this._pressedLabel
					},
					set: function(e) {
						this._pressedLabel = e, this._pressed && (this.label = this._pressedLabel, this.needsDraw = !0)
					}
				},
				_pressedClass: {
					value: "pressed"
				},
				pressedClass: {
					get: function() {
						return this._pressedClass
					},
					set: function(e) {
						this._pressedClass = e, this._pressed && (this.needsDraw = !0)
					}
				},
				label: {
					get: function() {
						return Object.getPropertyDescriptor(s, "label").get.call(this)
					},
					set: function(e) {
						Object.getPropertyDescriptor(s, "label").set.call(this, e), this._pressed === !0 && this._label === this._unpressedLabel ? this.pressed = !1 : this._pressed === !1 && this._label === this._pressedLabel && (this.pressed = !0)
					}
				},
				setLabelInitialValue: {
					value: function(e) {
						this._label === null && (this._label = e)
					}
				},
				willPrepareForDraw: {
					value: function() {
						Object.getPrototypeOf(o).willPrepareForDraw.call(this), this._unpressedLabel === null && this._label !== null && (this._unpressedLabel = this._label), this._pressedLabel === null && this._label !== null && (this._pressedLabel = this._label)
					}
				},
				draw: {
					value: function() {
						Object.getPrototypeOf(o).draw.call(this), this._pressed ? (this._element.classList.add(this._pressedClass), this._element.setAttribute("aria-pressed", !0)) : (this._element.classList.remove(this._pressedClass), this._element.setAttribute("aria-pressed", !1))
					}
				},
				_dispatchActionEvent: {
					value: function() {
						this.pressed = !this._pressed, Object.getPrototypeOf(o)._dispatchActionEvent.call(this)
					}
				},
				toggle: {
					value: function() {
						this.pressed = !this._pressed
					}
				}
			})
	}
}), montageDefine("1c0e374", "ui/main.reel/main", {
	dependencies: ["montage", "montage/ui/component", "model/remotemediator", "model/appdata"],
	factory: function(e, t, n) {
		var r = e("montage").Montage,
			i = e("montage/ui/component").Component,
			s = e("model/remotemediator").Remotemediator,
			o = e("model/appdata").AppData;
		t.Main = r.create(i, {
			appData: {
				value: o.create()
			},
			remoteMediator: {
				value: s.create()
			},
			categoryId: {
				value: null
			},
			_categoryButtonGroup: {
				value: null
			},
			didCreate: {
				value: function() {
					this.application.addEventListener("remoteDataReceived", this, !1), this.application.addEventListener("openTrailer", this, !1), this.canDrawGate.setField("latestBoxofficeMovies", !1), this.remoteMediator.load()
				}
			},
			templateDidLoad: {
				value: function() {
					var e = this.templateObjects;
					this._categoryButtonGroup = [e.latest, e.theaters, e.dvd, e.upcoming]
				}
			},
			handleRemoteDataReceived: {
				value: function(e) {
					var t = e.detail.data,
						n = e.detail.type;
					this.appData[n] = t, n === "latestBoxofficeMovies" && (this.canDrawGate.setField("latestBoxofficeMovies", !0), this.dispatchEventNamed("dataReceived", !0), this.changeCategory(n))
				}
			},
			handleOpenTrailer: {
				value: function(e) {
					var t = e.detail,
						n = this.templateObjects.popup;
					this.remoteMediator.searchYoutubeTrailer(t, function(e) {
						n.openTrailer(e)
					})
				}
			},
			handleCategoryButtonAction: {
				value: function(e) {
					this.changeCategory(e.target.category)
				}
			},
			changeCategory: {
				value: function(e) {
					var t = this._categoryButtonGroup;
					this.categoryId = e;
					for (var n = 0; n < t.length; n++) t[n].pressed = t[n].category === e
				}
			}
		})
	}
}), montageDefine("0fe37da", "ui/slot.reel/slot", {
	dependencies: ["montage", "ui/component"],
	factory: function(e, t, n) {
		var r = e("montage").Montage,
			i = e("ui/component").Component;
		t.Slot = r.create(i, {
			hasTemplate: {
				enumerable: !1,
				value: !1
			},
			didCreate: {
				value: function() {
					this.content = null
				}
			},
			delegate: {
				value: null
			},
			_content: {
				value: null
			},
			prepareForDraw: {
				value: function() {
					this.element.classList.add("montage-Slot")
				}
			},
			content: {
				get: function() {
					return this._content
				},
				set: function(e) {
					var t;
					e && typeof e.needsDraw != "undefined" ? (e.element ? t = e.element : (t = document.createElement("div"), t.id = "appendDiv", this.delegate && typeof this.delegate.slotElementForComponent == "function" && (t = this.delegate.slotElementForComponent(this, e, t))), Object.getPropertyDescriptor(i, "domContent").set.call(this, t), e.setElementWithParentComponent(t, this), e.needsDraw = !0) : Object.getPropertyDescriptor(i, "domContent").set.call(this, e), this._content = e, this.needsDraw = !0
				}
			},
			contentDidChange: {
				value: function(e, t) {
					this.delegate && typeof this.delegate.slotDidSwitchContent == "function" && this.delegate.slotDidSwitchContent(this, e, e ? e.controller : null, t, t ? t.controller : null)
				}
			}
		})
	}
}), montageDefine("1c0e374", "ui/moviepopup.reel/moviepopup", {
	dependencies: ["montage", "montage/ui/component"],
	factory: function(e, t, n) {
		var r = e("montage").Montage,
			i = e("montage/ui/component").Component;
		t.Moviepopup = r.create(i, {
			TRAILER_URL: {
				value: "http://www.youtube.com/embed/%s"
			},
			player: {
				value: null
			},
			opening: {
				value: !1
			},
			handleCloseButtonAction: {
				value: function() {
					this.close()
				}
			},
			openTrailer: {
				value: function(e) {
					this.player.src = this.TRAILER_URL.replace("%s", e), this.open()
				}
			},
			open: {
				value: function() {
					this.opening = !0, this.needsDraw = !0
				}
			},
			close: {
				value: function() {
					this.player.src = null, this.closing = !0, this.needsDraw = !0
				}
			},
			draw: {
				value: function() {
					this.opening ? (this.element.classList.add("moviepopup-open"), this.opening = !1) : this.closing && (this.element.classList.remove("moviepopup-open"), this.closing = !1)
				}
			}
		})
	}
}), montageDefine("0fe37da", "ui/toggle-button.reel/toggle-button.html", {
	text: '<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href="../button.reel/button.css">\n    <link rel=stylesheet href=toggle-button.css>\n</head>\n<body>\n</body>\n</html>'
}), montageDefine("0fe37da", "ui/button.reel/button.html", {
	text: "<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=button.css>\n</head>\n<body>\n</body>\n</html>"
})
bundleLoaded("index.html.bundle-1-2.js")
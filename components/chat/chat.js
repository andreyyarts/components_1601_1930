(function () {
	'use strict';

	/**
	 * @typedef {Object} ChatMessage
	 *
 	 * @property {string} text - Текст сообщения
 	 * @property {string} email - Email отправителя сообщения
 	 * @property {string} time - время отправления сообщения
	 */

	class Chat {
		constructor({ el }) {
			this.el = el;

			this.messages = this.el.querySelector('.chat__messages');
		}

		/**
		 * Добавить новое сообщение в чат
		 * @param {object} obj
		 * @param {string} obj.time
		 * @param {string} obj.email
		 * @param {string} obj.text
		 */
		addMessage({time, email, text}) {
			let option = document.createElement('option');

			option.text = `${time} (${email}): ${text}`;
			option.style.color = this.getHexColor((Math.random() * 1000000).toFixed());
			this.messages.add(option);
		}

		getHexColor(number) {
			return '#' + (number).toString(16).slice(-6);
		}

		onScrollStart(cb) {

		}

		onScrollEnd(cb) {

		}

		// methods
	}


	//export
	window.Chat = Chat;
})();
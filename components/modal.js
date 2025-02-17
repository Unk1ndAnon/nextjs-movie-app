const Modal = (props) => {
	let closeButton = null;
	const submitModal = () => {
		alert('submitting modals');
		closeButton.click();
	};
	return (
		<>
			<button
				type='button'
				className='btn btn-primary'
				data-toggle='modal'
				data-target='#exampleModal'
			>
				Create Movie
			</button>

			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Modal title
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>{props.children}</div>
						<div className='modal-footer'>
							<button
								ref={(el) => (closeButton = el)}
								type='button'
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							{props.hasSubmit ? (
								<button
									type='button'
									onClick={submitModal}
									className='btn btn-primary'
								>
									Save changes
								</button>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;

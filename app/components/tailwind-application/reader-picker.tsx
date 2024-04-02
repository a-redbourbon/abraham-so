import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { Form, useNavigate } from '@remix-run/react'
import clsx from 'clsx'
import {
	AnimatePresence,
	MotionConfig,
	motion,
	type Transition,
} from 'framer-motion'
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import {
	READERS,
	type Reader,
} from '#app/routes/_marketing+/tailwind-application'

export default function ReaderPicker({
	reader,
	setReader,
}: {
	reader: Reader
	setReader: React.Dispatch<React.SetStateAction<Reader>>
}) {
	const [open, setOpen] = useState<boolean>(false)
	const [ref, bounds] = useMeasure()
	const navigate = useNavigate()

	function handleChange(reader: Reader) {
		setReader(reader)
		setOpen(false)
		navigate(`/tailwind-application?reader=${reader}`, {
			preventScrollReset: true,
		})
	}

	const transition: Transition = {
		type: 'ease',
		ease: 'easeInOut',
		duration: 0.45,
	}

	return (
		<div className="relative h-7 overflow-visible">
			<MotionConfig transition={transition}>
				<div className=" absolute left-1/2 top-0 -translate-x-1/2 overflow-hidden rounded-full bg-gray-800 p-1 text-sm text-gray-200 shadow-popover ring-1 ring-white/15">
					<motion.div
						layout
						initial={{ width: '64px' }}
						animate={{
							height: bounds.height > 0 ? bounds.height : undefined,
							width: open ? '264px' : '64px',
						}}
						transition={{
							type: 'spring',
							bounce: 0,
							duration: transition.duration,
						}}
					>
						<div ref={ref} className="flex flex-col items-center justify-start">
							<AnimatePresence mode="popLayout" initial={false}>
								{open ? (
									<motion.div
										layout
										key="open"
										initial={{ opacity: 0, filter: 'blur(4px)' }}
										animate={{ opacity: 1, filter: 'blur(0px)' }}
										exit={{ opacity: 0, filter: 'blur(4px)' }}
										transition={{
											...transition,
											duration: transition.duration / 4,
										}}
									>
										<Form>
											<input type="hidden" name="reader" value={reader} />
											<ReaderRadioGroup
												reader={reader}
												handleChange={handleChange}
											/>
										</Form>
									</motion.div>
								) : (
									<motion.button
										layout
										key="closed"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, filter: 'blur(0px)' }}
										exit={{ opacity: 0, filter: 'blur(4px)' }}
										transition={{
											...transition,
											duration: transition.duration / 2,
										}}
										className=" m-auto flex w-fit cursor-default gap-1"
										onClick={() => setOpen(true)}
										aria-label="Select the current reader"
									>
										<img
											className="size-5 rounded-full"
											src={READERS[reader].avatarUrl}
											alt={READERS[reader].name}
										/>
										{READERS[reader].name}
									</motion.button>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				</div>
			</MotionConfig>
		</div>
	)
}

function ReaderRadioGroup({
	reader,
	handleChange,
}: {
	reader: Reader
	handleChange: (reader: Reader) => void
}) {
	return (
		<RadioGroup value={reader} onChange={handleChange}>
			<div className="flex gap-2">
				{Object.entries(READERS).map(([key, { name, avatarUrl }]) => (
					<Field key={key}>
						<motion.div
							layout="preserve-aspect"
							className={clsx(
								'flex items-center gap-2 rounded-full p-0.5 pr-2 hover:bg-white/[2%]',
								reader === key && 'bg-white/[5%] ring-1 ring-white/10',
							)}
						>
							<Radio value={key} className="group invisible hidden" />
							<Label
								className={clsx(
									' flex items-center gap-1 transition-colors group-data-[checked]:text-white',
									reader === key ? 'text-white' : 'text-gray-400',
								)}
							>
								<img
									className="h-8 w-8 rounded-full"
									src={avatarUrl}
									alt={name}
								/>
								{name}
							</Label>
						</motion.div>
					</Field>
				))}
			</div>
		</RadioGroup>
	)
}

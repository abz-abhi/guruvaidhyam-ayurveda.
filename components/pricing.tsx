export default function Pricing() {
	return (
		<section id="pricing" className="bg-white py-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-extrabold text-pink-500">Pricing</h2>
					<div className="mt-3 h-1 w-40 bg-pink-100 mx-auto rounded"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
					{/* Free */}
					<div className="bg-white border border-gray-100 rounded-md shadow-sm p-6">
						<h3 className="text-2xl font-semibold text-gray-700 text-center">Free</h3>
						<div className="mt-4 border-t border-gray-100">
							<ul className="divide-y divide-gray-100">
								<li className="py-4 text-center text-gray-500">1 user</li>
								<li className="py-4 text-center text-gray-500">Basic Support</li>
								<li className="py-4 text-center text-gray-500">1 GB of storage</li>
								<li className="py-4 text-center text-gray-500">Email support</li>
							</ul>
						</div>
						<div className="pt-6 text-center">
							<p className="text-2xl font-bold text-gray-800">$0 <span className="font-normal text-gray-600">for one user</span></p>
						</div>
					</div>

					{/* Pro - highlighted */}
					<div className="relative -mt-6 md:mt-0 md:scale-105 z-10 md:shadow-lg">
						<div className="bg-white border border-pink-100 rounded-md p-8 shadow-md">
							<h3 className="text-2xl font-semibold text-center text-pink-500">Pro</h3>
							<div className="mt-4 border-t border-pink-100">
								<ul className="divide-y divide-pink-50">
									<li className="py-4 text-center text-pink-500">5 users</li>
									<li className="py-4 text-center text-pink-500">Priority Support</li>
									<li className="py-4 text-center text-pink-500">10 GB of storage</li>
									<li className="py-4 text-center text-pink-500">Phone and Email support</li>
								</ul>
							</div>
							<div className="pt-6 text-center">
								<p className="text-3xl font-extrabold text-pink-500">$15 <span className="text-base font-medium text-gray-500">per user</span></p>
							</div>
						</div>
					</div>

					{/* Enterprise */}
					<div className="bg-white border border-gray-100 rounded-md shadow-sm p-6">
						<h3 className="text-2xl font-semibold text-gray-700 text-center">Enterprise</h3>
						<div className="mt-4 border-t border-gray-100">
							<ul className="divide-y divide-gray-100">
								<li className="py-4 text-center text-gray-500">50 users</li>
								<li className="py-4 text-center text-gray-500">24/7 Support</li>
								<li className="py-4 text-center text-gray-500">100 GB of storage</li>
								<li className="py-4 text-center text-gray-500">Phone and Email support</li>
							</ul>
						</div>
						<div className="pt-6 text-center">
							<p className="text-2xl font-bold text-gray-800">$29 <span className="font-normal text-gray-600">per user</span></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

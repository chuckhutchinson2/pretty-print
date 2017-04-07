package hello

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.CrossOrigin

import groovy.json.JsonOutput

@RestController
@CrossOrigin(origins = "*")
public class HealthController {
	@RequestMapping(value = "/", method=RequestMethod.GET)
	public @ResponseBody String health() {
		return "healthy"
	}
}
